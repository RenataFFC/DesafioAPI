import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './auth/user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt.guards';
import { HttpModule } from '@nestjs/axios';



@Module({
  imports:[
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    HttpModule,
    AuthModule,
    UserModule 
   
  ],
  controllers: [],
  providers: [ //através deste providers estaremos blindando todo o sistema utilizando o guard.
    {provide: APP_GUARD, useClass: JwtAuthGuard },
  ],
})
export class AppModule{}




