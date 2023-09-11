import { Schema, Prop, SchemaFactory} from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument <User>
//HydratedArraySubdocument - documento do usuario que volta do mongo
@Schema()
export class User {   
    @Prop({required: true})   //Prop é um decorator do mongosse e devemos validar
    name:string;

    @Prop({required: true})
    email:string;    

    @Prop({required: true})
    password:string;   

    @Prop({required: true})
    cpf:string;  

    @Prop({required: true})
    telefone:string;

    @Prop({required: true})
    rua:string;

    @Prop()
    numero:number;

        @Prop({required: true})
    cidade:string;

    @Prop({required: true})
    estado:string;
   
@Prop({required: true})
    cep:string;
    
    @Prop()
    fotoPerfil:string;  
}
export const UserSchema = SchemaFactory.createForClass(User)

  