import { BadRequestException, Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Put, Request } from '@nestjs/common'; 
import { UserService } from './user.service';
import { MessagesHelper } from '../helpers/messages.helper';
import { UpdateUserDto } from './dto/updateuser.dto';

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get() // estamos criando uma rota privada
  async getUser(@Request() req) {
    const {userId} = req?.user;
    const user = await this.userService.getUserById(userId); 

    if(!user){
       throw new BadRequestException(MessagesHelper.GET_USER_NOT_FOUND);
    }

    return {
      name: user.name,
      email: user.email,
      password: user.password,
      cpf:user.cpf,
      telefone:user.telefone,
      rua:user.rua,
      numero:user.numero,
      cidade:user.cidade,
      estado:user.estado,
      cep:user.cep,
      fotoPerfil:user.fotoPerfil,
      id: user._id.toString()
    };
  }

    @Put()  //Atualiza os dados do novo usuario
    @HttpCode(HttpStatus.OK) 
    async updateUser(@Request() req, @Body() dto:UpdateUserDto){ 
      const {userId} = req.user; 
      await this.userService.updateUser(userId,dto); 
    } 

    @Delete(':id')
    async delete(@Param('id') id:string ) {
       this.userService.delete(id);
       return { message: MessagesHelper.DELETE_USER};
    }

  /*@Delete(':id')
  async deleteUser(@Request('id') id:string ) {
     this.userService.delete(req.user.id);
    return { message: 'Usuário deletado com sucesso' };
  }*/

  

  }
