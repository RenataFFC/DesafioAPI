// src/cep/cep.service.ts
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { HttpService} from '@nestjs/axios';


@Injectable()
export class CepService {
  constructor(private HttpService: HttpService) {}

  async getAddressByCep(cep: string) {
       return  await this.HttpService
      .get(`https://viacep.com.br/ws/${cep}/json/`);
       //.pipe(map(response => response?.data))
      //.toPromise();

     // console.log(response)

   // return response;

   
  }
}
