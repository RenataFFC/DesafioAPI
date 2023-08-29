import {IsNotEmpty, MinLength,IsString, MaxLength, Matches } from 'class-validator'; 

import { MessagesHelper } from 'src/auth/helpers/messages.helper'; 

export class UpdateUserDto { 
  @IsNotEmpty({ message: MessagesHelper.REGISTER_NAME_NOT_VALID }) 
  @MinLength(2, { message: MessagesHelper.REGISTER_NAME_NOT_VALID }) 
  name: string; 
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

  @IsNotEmpty({message: MessagesHelper.REGISTER_RUA_NOT_VALID})
  @MinLength(2,{message: MessagesHelper.REGISTER_RUA_NOT_VALID})
  rua:string;

  @IsNotEmpty({message: MessagesHelper.REGISTER_NUMERO_NOT_VALID})
  numero:number;

  @IsNotEmpty({message: MessagesHelper.REGISTER_BAIRRO_NOT_VALID})
  @IsString({message: MessagesHelper.REGISTER_BAIRRO_NOT_VALID})
  bairro: string;

  @IsNotEmpty({message: MessagesHelper.REGISTER_CIDADE_NOT_VALID})
  @IsString({message: MessagesHelper.REGISTER_CIDADE_NOT_VALID})
  cidade: string;

  
  @IsNotEmpty({message: MessagesHelper.REGISTER_CIDADE_NOT_VALID})
  @IsString({message: MessagesHelper.REGISTER_CIDADE_NOT_VALID})
  estado: string;

  @IsNotEmpty({ message: MessagesHelper.REGISTER_CEP_NOT_VALID })
  @IsString({ message: MessagesHelper.REGISTER_CEP_NOT_VALID })
  cep: string;

  @IsString() 
  fotoPerfil: string; 
} 