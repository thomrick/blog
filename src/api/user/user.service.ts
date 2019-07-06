import { Injectable } from '@nestjs/common';
import { CreateUserCommand } from '../../command';
import { UserAggregate } from '../../domain';
import { CommandBus, QueryBus } from '../../infra/bus';
import { GetUserByUsernameQuery, GetUserByUsernameResult } from '../../query';
import { CreateUserDto, UserDto } from './dto';

@Injectable()
export class UserService {
  private readonly orderer: CommandBus;
  private readonly querier: QueryBus;

  constructor(commander: CommandBus, queryBus: QueryBus) {
    this.orderer = commander;
    this.querier = queryBus;
  }

  public create(dto: CreateUserDto): UserDto {
    this.orderer.dispatch(new CreateUserCommand(dto.username));
    const result: GetUserByUsernameResult = this.querier.ask(new GetUserByUsernameQuery(dto.username));
    const user: UserAggregate | null = result.getData();
    if (user === null) {
      throw new Error('User has not been created');
    }
    return UserDto.from(user);
  }
}
