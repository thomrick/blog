import { Inject, Injectable } from '@nestjs/common';
import { CreateUser } from '../../command';
import { UserAggregate } from '../../domain';
import { COMMAND_BUS_TOKEN, CommandBus } from '../../infra';
import { CreateUserDto } from './dto';

@Injectable()
export class UserService {
  private readonly commands: CommandBus;

  constructor(@Inject(COMMAND_BUS_TOKEN) commands: CommandBus) {
    this.commands = commands;
  }

  public create(dto: CreateUserDto): UserAggregate {
    this.commands.dispatch(new CreateUser(dto.username));
    throw new Error('Method not implemented');
  }
}
