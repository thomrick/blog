import { Inject, Injectable, NotFoundException, ServiceUnavailableException } from '@nestjs/common';
import { CreateUserCommand } from '../../command';
import { UserAggregate } from '../../domain';
import { COMMAND_BUS_TOKEN, CommandBus, QUERY_BUS_TOKEN, QueryBus } from '../../infra/bus';
import {
  GetUserByEmailQuery,
  GetUserByUsernameQuery,
  GetUserByUsernameResult,
  GetUserResult,
  Query,
} from '../../query';
import { CreateUserDto, FindOneQueryDto, UserDto } from './dto';

@Injectable()
export class UserService {
  private readonly commandBus: CommandBus;
  private readonly queryBus: QueryBus;

  constructor(@Inject(COMMAND_BUS_TOKEN) commandBus: CommandBus, @Inject(QUERY_BUS_TOKEN) queryBus: QueryBus) {
    this.commandBus = commandBus;
    this.queryBus = queryBus;
  }

  public create(dto: CreateUserDto): UserDto {
    this.commandBus.dispatch(new CreateUserCommand(dto.email, dto.password, dto.username));
    const result: GetUserByUsernameResult = this.queryBus.ask(new GetUserByUsernameQuery(dto.username));
    const user: UserAggregate | null = result.getData();
    if (user === null) {
      throw new Error('User has not been created');
    }
    return UserDto.from(user);
  }

  public findOne(dto: FindOneQueryDto): UserDto {
    const query: Query = this.createGetUserQueryFrom(dto);
    const result: GetUserResult = this.queryBus.ask(query);
    const user: UserAggregate | null = result.getData();
    if (user === null) {
      throw new NotFoundException();
    }
    return UserDto.from(user);
  }

  private createGetUserQueryFrom(dto: FindOneQueryDto): Query {
    if (!!dto.username) {
      return new GetUserByUsernameQuery(dto.username);
    }
    if (!!dto.email) {
      return new GetUserByEmailQuery(dto.email);
    }
    throw new ServiceUnavailableException('Query not supported');
  }
}
