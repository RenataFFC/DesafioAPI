import { BadRequestException, Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Put, Request } from '@nestjs/common'; 
import { UserService } from './user.service';
import { MessagesHelper } from '../helpers/messages.helper';
import { UpdateUserDto } from './dto/updateuser.dto';
import { CepService } from 'src/cep/cep.service';

@Controller("user")
export class UserController {
  constructor(
      private readonly userService: UserService,
    
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
   

    @Delete(':id')
    async delete(@Param('id') id:string ) {
       this.userService.delete(id);
       return { message: MessagesHelper.DELETE_USER};
    } 
  

  }
