import { Injectable } from '@nestjs/common';
import { CreateLoginUserDto } from './dto/create-login-user.dto';
import { UpdateLoginUserDto } from './dto/update-login-user.dto';
import { PrismaService } from '@utils/prisma.service';
import { LoginUserDto } from './dto/login-user.dto';
import { normalize } from './login-user.normalizer';
import { User } from '@prisma/client';

@Injectable()
export class LoginUserService extends PrismaService {
  async findUserByName(LoginUserDto: LoginUserDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        username: LoginUserDto.username,
        password: LoginUserDto.password,
      },
    });
    return normalize(user);
  }

  create(createLoginUserDto: CreateLoginUserDto) {
    console.log(createLoginUserDto);
    return this.prisma.user.create({ data: createLoginUserDto });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} loginUser`;
  }

  update(id: number, updateLoginUserDto: UpdateLoginUserDto) {
    return `This action updates a #${id} loginUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} loginUser`;
  }
}
