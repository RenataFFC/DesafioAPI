import { BadRequestException, Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Put, Request } from '@nestjs/common'; 
import { UserService } from './user.service';
import { MessagesHelper } from '../helpers/messages.helper';
import { UpdateUserDto } from './dto/updateuser.dto';
import { CepService } from 'src/cep/cep.service';

@Controller("user")
export class UserController {
  constructor(
      private readonly userService: UserService,
      private readonly cepService: CepService,
  ){}

  @Get() // estamos criando uma rota privada
  async getUser(@Request() req) {
    const {userId} = req?.user;
    const user = await this.userService.getUserById(userId); 
    if(!user){
       throw new BadRequestException(MessagesHelper.GET_USER_NOT_FOUND);
    }
    return user;    
  }

    @Put()  //Atualiza os dados do novo usuario
    @HttpCode(HttpStatus.OK) 
    async updateUser(@Request() req, @Body() dto:UpdateUserDto){ 
      const {userId} = req.user; 
      await this.userService.updateUser(userId,dto); 
    } 


    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
      const updatedUser = await this.userService.updateUser(id, updateUserDto);
    
      // Consulta o CEP para obter o endereço e atualiza no usuário
     /* if (updateUserDto.cep) {
        const endereco = await this.cepService.getAddressByCep(updateUserDto.cep);
        updatedUser.cep = endereco.cep;
        updatedUser.rua = endereco.logradouro;
        updatedUser.numero = endereco.logradouro; 
        updatedUser.bairro = endereco.bairro;
        updatedUser.cidade = endereco.localidade;
        updatedUser.estado = endereco.estado;  
        
      }*/
    
      return this.userService.updateUser(id, updatedUser);
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
