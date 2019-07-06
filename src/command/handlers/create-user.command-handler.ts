import { UserAggregate, UserRepository } from '../../domain';
import { CreateUser } from '../commands';
import { CommandHandler } from './command-handler';

export class CreateUserCommandHandler implements CommandHandler {
  private readonly repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  public handle(command: CreateUser): void {
    const user: UserAggregate = UserAggregate.with(command.username);
    this.repository.save(user);
  }

  public subscribeTo(): string {
    return CreateUser.name;
  }
}
