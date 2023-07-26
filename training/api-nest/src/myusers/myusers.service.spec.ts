import { Test, TestingModule } from '@nestjs/testing';
import { MyusersService } from './myusers.service';

describe('MyusersService', () => {
  let service: MyusersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyusersService],
    }).compile();

    service = module.get<MyusersService>(MyusersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
