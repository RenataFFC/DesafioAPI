import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import {User, UserSchema } from "./schemas/user.schema";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { CepService } from "src/cep/cep.service";
import { HttpService } from "@nestjs/axios/dist";


@Module({
  imports: [
    MongooseModule.forFeature([{name: User.name, schema:UserSchema}]),
    HttpService],
  controllers: [UserController],
  providers:[UserService,CepService],
  exports:[MongooseModule,UserService]

})
export class UserModule{}