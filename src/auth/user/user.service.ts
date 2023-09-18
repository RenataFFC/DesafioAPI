import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./schemas/user.schema";
import { Model } from "mongoose";
import * as CryptoJs from 'crypto-js';
import { RegisterDto } from "./dto/Register.dto";
import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from "./dto/updateuser.dto";



//@InjectModel (Vem do mongoose para injetar o modelo)
@Injectable()
export class UserService{
   delete(id: string) {
     throw new Error('Method not implemented.');
   }
   updateUser(userId: any, dto: UpdateUserDto) {
     throw new Error('Method not implemented');
   }
   getUserById: any;
   constructor(@InjectModel(User.name) private readonly userModel:Model<UserDocument>){}
 
   async create(dto: RegisterDto){
        dto.password = CryptoJs.AES.encrypt(dto.password, process.env.USER_SECRET_KEY).toString();
        const createUser = new this.userModel(dto);
        await createUser.save();
   }

   async existsByEmail(email: string) : Promise<boolean>{
      const result = await this.userModel.find({email});
      if(result && result.length > 0){
         return true;
      }
      return false;
   }
   
   async getUserByLoginPassword(email: string, password: string) : Promise<UserDocument | null>{ // criamos um serviço e verificamos se o usuario existe
       const user = await this.userModel.findOne({email}) as UserDocument;

       if(user){ // se existir descriptografamos a senha dele
          const bytes =  CryptoJs.AES.decrypt(user.password, process.env.USER_SECRET_KEY) // aqui devolve a senha em bytes
          const savePassword = bytes.toString(CryptoJs.enc.Utf8); // e verificamos se é igual

          if(password == savePassword){ // se os dois usuario e senha forem iguais ele devolve o usuario, se ele ele devolve null
             return user;
          }
       }
       return null;
   }
          
}