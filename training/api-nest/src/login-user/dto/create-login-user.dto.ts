import { IsNotEmpty } from 'class-validator';

export class CreateLoginUserDto {
  @IsNotEmpty()
  username: string;
  password: string;
}
