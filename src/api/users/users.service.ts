import { Inject, Injectable } from '@nestjs/common';
import { CreateUser } from '../../command';
import { UserAggregate } from '../../domain';
import { CommandBus } from '../../infra';
import { CreateUserDto } from './dto';
import { USER_COMMAND_BUS_TOKEN } from './users.command-bus';

@Injectable()
export class UsersService {
  private readonly commands: CommandBus;

  constructor(@Inject(USER_COMMAND_BUS_TOKEN) commands: CommandBus) {
    this.commands = commands;
  }

  public create(dto: CreateUserDto): UserAggregate {
    this.commands.handle(new CreateUser(dto.username));
    throw new Error('Method not implemented');
  }
}
