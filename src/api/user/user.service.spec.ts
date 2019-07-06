import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { UserAggregate } from '../../domain';
import { BusModule, COMMAND_BUS_TOKEN, CommandBus, QUERY_BUS_TOKEN, QueryBus } from '../../infra';
import {
  GetUserByEmailQuery,
  GetUserByEmailResult,
  GetUserByUsernameQuery,
  GetUserByUsernameResult,
  GetUserResult,
  Result,
} from '../../query';
import { FindOneQueryDto, UserDto } from './dto';
import { UserService } from './user.service';

class NullResult extends GetUserResult {
  constructor() {
    super(null);
  }

  public getData(): null {
    return null;
  }
}

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
    const user = UserAggregate.with('email', 'password', 'username');
    const askSpy = jest.spyOn(queryBusMock, 'ask');

    it('should get user by username', () => {
      askSpy.mockImplementationOnce(() => new GetUserByUsernameResult(user));
      const qs: FindOneQueryDto = FindOneQueryDto.Builder().withUsername(user.getUsername()).build();

      const dto: UserDto = service.findOne(qs);

      expect(askSpy).toHaveBeenCalledWith(new GetUserByUsernameQuery(user.getUsername()));
      expect(dto.username).toEqual(user.getUsername());
    });

    it('should get user by email', () => {
      askSpy.mockImplementationOnce(() => new GetUserByEmailResult(user));
      const qs: FindOneQueryDto = FindOneQueryDto.Builder().withEmail(user.getEmail()).build();

      const dto: UserDto = service.findOne(qs);

      expect(askSpy).toHaveBeenCalledWith(new GetUserByEmailQuery(user.getEmail()));
      expect(dto.username).toEqual(user.getUsername());
    });

    it('should throw a not found exception if user does not exist', () => {
      askSpy.mockImplementationOnce(() => new NullResult());
      const qs: FindOneQueryDto = FindOneQueryDto.Builder().withEmail(user.getEmail()).build();

      expect(() => service.findOne(qs)).toThrow(NotFoundException);
    });
  });
});
