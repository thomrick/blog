import { Test, TestingModule } from '@nestjs/testing';
import { BusModule, CommandBus, QueryBus } from '../../infra';
import { UserService } from './user.service';

describe('UserService', () => {
  const commandBusMock: CommandBus = {
    dispatch: jest.fn(),
  };
  const queryBusMock: QueryBus = {
    ask: jest.fn(),
  };

  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        BusModule,
      ],
      providers: [
        UserService,
      ],
    })
    .overrideProvider(CommandBus).useValue(commandBusMock)
    .overrideProvider(QueryBus).useValue(queryBusMock)
    .compile();

    service = module.get(UserService);
  });

  describe('create', () => {
    it('should pass', () => {
      expect(true).toBeTruthy();
    });
  });

  describe('findOne', () => {
    it('should pass', () => {
      expect(true).toBeTruthy();
    });
  });
});
