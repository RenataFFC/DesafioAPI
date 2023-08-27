import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserModule } from "./user/user.module";
import { JwtStrategy} from "./strategies/jwt.Strategy";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: 
  [UserModule,
    JwtModule.register({
         secret:process.env.JWT_SECRET_KEY
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}

//por padrão tudo o que trafega no nest, trafega a partir dos modulos.

