import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MyusersService } from './myusers.service';
import { Myuser } from './entities/myuser.entity';
import { CreateMyuserInput } from './dto/create-myuser.input';
import { UpdateMyuserInput } from './dto/update-myuser.input';

@Resolver(() => Myuser)
export class MyusersResolver {
  constructor(private readonly myusersService: MyusersService) {}

  @Mutation(() => Myuser)
  createMyuser(@Args('createMyuserInput') createMyuserInput: CreateMyuserInput) {
    return this.myusersService.create(createMyuserInput);
  }

  @Query(() => [Myuser], { name: 'myusers' })
  findAll() {
    return this.myusersService.findAll();
  }

  @Query(() => Myuser, { name: 'myuser' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.myusersService.findOne(id);
  }

  @Mutation(() => Myuser)
  updateMyuser(@Args('updateMyuserInput') updateMyuserInput: UpdateMyuserInput) {
    return this.myusersService.update(updateMyuserInput.id, updateMyuserInput);
  }

  @Mutation(() => Myuser)
  removeMyuser(@Args('id', { type: () => Int }) id: number) {
    return this.myusersService.remove(id);
  }
}
