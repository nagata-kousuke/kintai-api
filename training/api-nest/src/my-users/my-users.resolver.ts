import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MyUsersService } from './my-users.service';
import { CreateMyUserInput } from './dto/create-my-user.input';
import { UpdateMyUserInput } from './dto/update-my-user.input';

@Resolver('MyUser')
export class MyUsersResolver {
  constructor(private readonly myUsersService: MyUsersService) {}

  @Mutation('createMyUser')
  create(@Args('createMyUserInput') createMyUserInput: CreateMyUserInput) {
    return this.myUsersService.create(createMyUserInput);
  }

  @Query('myUsers')
  findAll() {
    console.log(this.myUsersService.findAll());
    return this.myUsersService.findAll();
  }

  @Query('myUser')
  findOne(@Args('id') id: number) {
    return this.myUsersService.findOne(id);
  }

  @Mutation('updateMyUser')
  update(@Args('updateMyUserInput') updateMyUserInput: UpdateMyUserInput) {
    return this.myUsersService.update(updateMyUserInput.id, updateMyUserInput);
  }

  @Mutation('removeMyUser')
  remove(@Args('id') id: number) {
    return this.myUsersService.remove(id);
  }
}
