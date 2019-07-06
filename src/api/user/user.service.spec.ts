import { Test, TestingModule } from '@nestjs/testing';
import { UserAggregate } from '../../domain';
import { BusModule, COMMAND_BUS_TOKEN, CommandBus, QUERY_BUS_TOKEN, QueryBus } from '../../infra';
import { GetUserByUsernameQuery, GetUserByUsernameResult } from '../../query';
import { UserDto } from './dto';
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
    .overrideProvider(COMMAND_BUS_TOKEN).useValue(commandBusMock)
    .overrideProvider(QUERY_BUS_TOKEN).useValue(queryBusMock)
    .compile();

    service = module.get(UserService);
  });

  describe('create', () => {
    it('should pass', () => {
      expect(true).toBeTruthy();
    });
  });

  describe('findOne', () => {
    it('should get user by username', () => {
      const user = UserAggregate.with('username');
      const askSpy = jest.spyOn(queryBusMock, 'ask');
      askSpy.mockImplementationOnce(() => new GetUserByUsernameResult(user));

      const dto: UserDto = service.findOne(user.getUsername());

      expect(askSpy).toHaveBeenCalledWith(new GetUserByUsernameQuery(user.getUsername()));
      expect(dto.username).toEqual(user.getUsername());
    });
  });
});
