import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './user/dto/Register.dto';
import { IsPublic } from './decorators/ispublic.decorator';

@Controller("auth")
  export class AuthController {
     constructor(private readonly authService:AuthService){}

    @Post('login')// recebe do http a rota
    @HttpCode(HttpStatus.OK)  // recebe do http a rota
    @IsPublic()
    login(@Body() dto: LoginDto) { // Ele pega as informações do Body do http e transforma no dto
    return this.authService.login(dto); // se der tudo certo nas validações passa para a camada de regra de negocio que é o service e vai executar o login
    }

    @Post('register')
    @IsPublic()
    @HttpCode(HttpStatus.OK)  
    register(@Body() dto: RegisterDto){ 
    return this.authService.register(dto);    
   }

}



