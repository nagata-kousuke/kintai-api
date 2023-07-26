import { Test, TestingModule } from '@nestjs/testing';
import { MyUsersService } from './my-users.service';

describe('MyUsersService', () => {
  let service: MyUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyUsersService],
    }).compile();

    service = module.get<MyUsersService>(MyUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
