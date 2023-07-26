import { Module } from '@nestjs/common';
import { MyusersService } from './myusers.service';
import { MyusersResolver } from './myusers.resolver';

@Module({
  providers: [MyusersResolver, MyusersService]
})
export class MyusersModule {}
