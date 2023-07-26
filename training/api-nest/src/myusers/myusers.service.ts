import { Injectable } from '@nestjs/common';
import { CreateMyuserInput } from './dto/create-myuser.input';
import { UpdateMyuserInput } from './dto/update-myuser.input';

@Injectable()
export class MyusersService {
  create(createMyuserInput: CreateMyuserInput) {
    return 'This action adds a new myuser';
  }

  findAll() {
    return `This action returns all myusers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} myuser`;
  }

  update(id: number, updateMyuserInput: UpdateMyuserInput) {
    return `This action updates a #${id} myuser`;
  }

  remove(id: number) {
    return `This action removes a #${id} myuser`;
  }
}
