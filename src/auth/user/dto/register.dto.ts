import { IsNotEmpty, IsEmail, IsString, MinLength, MaxLength, Matches } from 'class-validator';
import { MessagesHelper} from '../../../auth/helpers/messages.helper';

export class RegisterDto {
  @IsNotEmpty({message:'Nome não pode ser vazio'})
  @MinLength(2,{ message: MessagesHelper.REGISTER_NAME_NOT_VALID})
  name:string;

  @IsEmail({},{message:MessagesHelper.REGISTER_EMAIL_NOT_VALID})
  email:string;

  @IsNotEmpty({ message: MessagesHelper.AUTH_PASSWORD_NOT_FOUND })
  @MinLength(4,{ message: MessagesHelper.REGISTER_PASSWORD_NOT_VALID})
  @MaxLength(20,{ message: MessagesHelper.REGISTER_PASSWORD_NOT_VALID})
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
  {message:MessagesHelper.REGISTER_PASSWORD_NOT_VALID})
  password:string;

  @IsNotEmpty({ message: MessagesHelper.REGISTER_CPF_NOT_VALID })
  cpf: string;

  @IsNotEmpty({ message: MessagesHelper.REGISTER_TELEFONE_NOT_VALID })
  telefone: string;

  @IsNotEmpty({ message: MessagesHelper.REGISTER_CEP_NOT_VALID })
  @IsString({ message: MessagesHelper.REGISTER_CEP_NOT_VALID })
  cep: string;

  @IsNotEmpty({message: MessagesHelper.REGISTER_RUA_NOT_VALID})
  @MinLength(2,{message: MessagesHelper.REGISTER_RUA_NOT_VALID})
  rua:string;

  @IsNotEmpty({message: MessagesHelper.REGISTER_NUMERO_NOT_VALID})
  numero:number;

  @IsNotEmpty({message: MessagesHelper.REGISTER_BAIRRO_NOT_VALID})
  @IsString({message: MessagesHelper.REGISTER_BAIRRO_NOT_VALID})
  bairro: string;

  @IsNotEmpty({message: 'O campo cidade é obrigatório'})
  @IsString({message: MessagesHelper.REGISTER_CIDADE_NOT_VALID})
  cidade: string;

  
  @IsNotEmpty({message: 'O campo cidade é obrigatório'})
  @IsString({message: MessagesHelper.REGISTER_CIDADE_NOT_VALID})
  estado: string;


  
  @IsString()
  fotoPerfil:string;
}