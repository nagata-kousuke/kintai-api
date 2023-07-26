import { CreateMyUserInput } from './create-my-user.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateMyUserInput extends PartialType(CreateMyUserInput) {
  id: number;
}
