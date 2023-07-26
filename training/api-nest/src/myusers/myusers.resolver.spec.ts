import { Test, TestingModule } from '@nestjs/testing';
import { MyusersResolver } from './myusers.resolver';
import { MyusersService } from './myusers.service';

describe('MyusersResolver', () => {
  let resolver: MyusersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyusersResolver, MyusersService],
    }).compile();

    resolver = module.get<MyusersResolver>(MyusersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
