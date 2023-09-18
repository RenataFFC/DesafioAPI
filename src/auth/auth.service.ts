import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { LoginDto } from "./dtos/login.dto";
import { MessagesHelper } from "./helpers/messages.helper";
import { RegisterDto } from "./user/dto/Register.dto";
import { UserService } from "./user/user.service";
import { JwtService } from "@nestjs/jwt";
import { CepService } from "src/cep/cep.service";


@Injectable()
export class AuthService {
    private logger = new Logger(AuthService.name);
    
    constructor(
      private readonly userService: UserService,
      private readonly jwtService: JwtService, //recebemos o serviço na construção
      private readonly cepService: CepService
       ){}

    async login(dto: LoginDto) {
      this.logger.debug('login - started');
      const user = await this.userService.getUserByLoginPassword(dto.login, dto.password);
      if (user == null) {  // se encontra o usuario no banco e estiver tudo validado.
        throw new BadRequestException(MessagesHelper.AUTH_PASSWORD_OR_LOGIN_NOT_FOUND);
      }
      //geramos um token de resultado
      const tokenPayload = {email: user.email, sub: user._id} // no mongo db o id fica salvo no _id
        return{
          email:user.email,
          name: user.name,
          token: this.jwtService.sign(tokenPayload,{secret: process.env.USER_JWT_SECRET_KEY})
        }       
      }

    async register(dto:RegisterDto){
      this.logger.debug('register - started');
      if(await this.userService.existsByEmail(dto.email)){       
          throw new BadRequestException(MessagesHelper.REGISTER_EXIST_EMAIL_ACCOUNT);         
      }   


     /* const endereco = this.cepService.getAddressByCep(dto.cep);
      if(!endereco){       
        throw new BadRequestException('cep invalido');         
      }   
         //dto.rua = endereco?.logradouro;
         
          
        await this.userService.create(dto);   

    }*/
  }
}
