import {ExecutionContext,Injectable, UnauthorizedException,} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { IS_PUBLIC_KEY } from "../decorators/ispublic.decorator";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      //getAllAndOverrida devolve a lista dos decorators
      context.getHandler(),
      context.getClass(),
    ]);
        if (isPublic) {
          return true;
        }

    const canActivate = super.canActivate(context); //Valida  o token do super(pai) senão aguarda a promisse

        if (typeof canActivate === "boolean") {
          return canActivate;
        }

    const canActivatePromise = canActivate as Promise<boolean>;
    return canActivatePromise.catch((error) => {
      if (error && error.message) {
        throw new UnauthorizedException(error.message);
      }
        throw new UnauthorizedException();
    });
  }
}
