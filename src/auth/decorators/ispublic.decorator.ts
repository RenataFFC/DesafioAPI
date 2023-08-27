import {SetMetadata} from "@nestjs/common";


export const IS_PUBLIC_KEY = 'isPublic'; // chave para comparação
export const IsPublic = () =>SetMetadata(IS_PUBLIC_KEY,true); // quando p isPublic for true a rota é pública, senão false


//CriamoS as notações onde indicamos se a rota é p  pública ou não