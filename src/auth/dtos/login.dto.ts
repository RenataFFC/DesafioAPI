import { IsEmail, IsNotEmpty } from "class-validator";
import { MessagesHelper } from "../helpers/messages.helper";

export class LoginDto{
  @IsEmail({},{message:MessagesHelper.AUTH_LOGIN_NOT_FOUND})// passando a nossa mensagem de validação
  login: string;
 
  @IsNotEmpty({message:MessagesHelper.AUTH_PASSWORD_NOT_FOUND})
  password: string;
} 
 //@IsEmail   @IsNotEmpty - São decorators do classvalidador que já valida se o campo é válido ou não