import { Injectable } from '@nestjs/common';
import { CreateMyUserInput } from './dto/create-my-user.input';
import { UpdateMyUserInput } from './dto/update-my-user.input';
import { PrismaService } from '@utils/prisma.service';

@Injectable()
export class MyUsersService extends PrismaService {
  create(createMyUserInput: CreateMyUserInput) {
    return 'This action adds a new myUser';
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} myUser`;
  }

  update(id: number, updateMyUserInput: UpdateMyUserInput) {
    return `This action updates a #${id} myUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} myUser`;
  }
}
