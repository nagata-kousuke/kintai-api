import { Test, TestingModule } from '@nestjs/testing';
import { MyUsersResolver } from './my-users.resolver';
import { MyUsersService } from './my-users.service';

describe('MyUsersResolver', () => {
  let resolver: MyUsersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyUsersResolver, MyUsersService],
    }).compile();

    resolver = module.get<MyUsersResolver>(MyUsersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
