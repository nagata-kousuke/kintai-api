import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMyuserInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
