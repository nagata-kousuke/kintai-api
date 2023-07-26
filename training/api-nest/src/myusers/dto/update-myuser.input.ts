import { CreateMyuserInput } from './create-myuser.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMyuserInput extends PartialType(CreateMyuserInput) {
  @Field(() => Int)
  id: number;
}
