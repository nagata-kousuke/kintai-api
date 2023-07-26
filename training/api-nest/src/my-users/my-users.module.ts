import { Module } from '@nestjs/common';
import { MyUsersService } from './my-users.service';
import { MyUsersResolver } from './my-users.resolver';

@Module({
  providers: [MyUsersResolver, MyUsersService],
})
export class MyUsersModule {}
