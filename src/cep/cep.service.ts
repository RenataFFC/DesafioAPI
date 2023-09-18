import { HttpService } from "@nestjs/axios";

export class CepService { 
  
  async getAddressByCep(cep: string) {
       const axios = new HttpService()
       return  await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
       //.pipe(map(response => response?.data))
      //.toPromise();
     // console.log(response)
   // return response;   
  }
}
