import { Injectable } from '@nestjs/common';
import { CreateUser } from '../../command';
import { UserAggregate } from '../../domain';
import { CommandBus } from '../../infra/bus';
import { CreateUserDto } from './dto';

@Injectable()
export class UserService {
  private readonly commands: CommandBus;

  constructor(commands: CommandBus) {
    this.commands = commands;
  }

  public create(dto: CreateUserDto): UserAggregate {
    this.commands.dispatch(new CreateUser(dto.username));
    throw new Error('Method not implemented');
  }
}
