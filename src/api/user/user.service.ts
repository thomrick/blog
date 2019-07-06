import { Inject, Injectable } from '@nestjs/common';
import { CreateUserCommand } from '../../command';
import { UserAggregate } from '../../domain';
import { COMMAND_BUS_TOKEN, CommandBus, QUERY_BUS_TOKEN, QueryBus } from '../../infra/bus';
import { GetUserByUsernameQuery, GetUserByUsernameResult } from '../../query';
import { CreateUserDto, UserDto } from './dto';

@Injectable()
export class UserService {
  private readonly commandBus: CommandBus;
  private readonly queryBus: QueryBus;

  constructor(@Inject(COMMAND_BUS_TOKEN) commandBus: CommandBus, @Inject(QUERY_BUS_TOKEN) queryBus: QueryBus) {
    this.commandBus = commandBus;
    this.queryBus = queryBus;
  }

  public create(dto: CreateUserDto): UserDto {
    this.commandBus.dispatch(new CreateUserCommand(dto.username));
    const result: GetUserByUsernameResult = this.queryBus.ask(new GetUserByUsernameQuery(dto.username));
    const user: UserAggregate | null = result.getData();
    if (user === null) {
      throw new Error('User has not been created');
    }
    return UserDto.from(user);
  }

  public findOne(username: string): UserDto {
    const result: GetUserByUsernameResult = this.queryBus.ask(new GetUserByUsernameQuery(username));
    return UserDto.from(result.getData() as UserAggregate);
  }
}
