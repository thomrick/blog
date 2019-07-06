import { UserAggregate, UserRepository } from '../../domain';
import { CreateUserCommand } from '../commands';
import { CommandHandler } from './command-handler';

export class CreateUserCommandHandler implements CommandHandler {
  private readonly repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  public handle(command: CreateUserCommand): void {
    const user: UserAggregate = UserAggregate.with(command.username);
    this.repository.save(user);
  }

  public subscribeTo(): string {
    return CreateUserCommand.name;
  }
}
