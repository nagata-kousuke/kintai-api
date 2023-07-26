import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Session,
  UseGuards,
} from '@nestjs/common';
import { LoginUserService } from './login-user.service';
import { CreateLoginUserDto } from './dto/create-login-user.dto';
import { UpdateLoginUserDto } from './dto/update-login-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { SessionType, LoginSession } from '@utils/session.type';
import { CurrentUserGuard } from '@app/current-user.guard';
import { LoguinGuard } from './entities/login-guard';

@Controller('login-user')
export class LoginUserController {
  constructor(private readonly loginUserService: LoginUserService) {}

  @Post()
  create(@Body() createLoginUserDto: CreateLoginUserDto) {
    return this.loginUserService.create(createLoginUserDto);
  }

  @Get('Login')
  @UseGuards(new LoguinGuard())
  getLogin(@Session() session: SessionType) {
    session.visits = session.visits ? session.visits + 1 : 1;

    return `login times ${session.visits} isLogin ${session.login}`;
  }

  @Post('login')
  async findByUserName(
    @Session() session: LoginSession,
    @Body() loginUserDto: LoginUserDto,
  ) {
    const result = await this.loginUserService.findUserByName(loginUserDto);
    session.login = result.login;
    return this.loginUserService.findUserByName(loginUserDto);
  }

  @Get('logout')
  getLogout(@Session() session: LoginSession) {
    session.login = false;
    console.log();
    return 'ログアウトしました';
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.loginUserService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLoginUserDto: UpdateLoginUserDto,
  ) {
    return this.loginUserService.update(+id, updateLoginUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginUserService.remove(+id);
  }
}
