import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';

@Controller("auth")
export class AuthController {
constructor(private readonly service: AuthService) { }
@Post('login')// recebe do http a rota
@HttpCode(HttpStatus.OK)  // recebe do http a rota
login(@Body() dto: LoginDto) { // Ele pega as informações do Body do http e transforma no dto
return this.service.login(dto); // se der tudo certo nas validações passa para a camada de regra de negocio que é o service e vai executar o login
}
}

