import { UserAggregate, UserRepository } from '../../domain';
import { CreateUser } from '../create-user.command';
import { CommandHandler } from './command-handler';

export class CreateUserCommandHandler implements CommandHandler<CreateUser> {
  private readonly repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  public handle(command: CreateUser): void {
    const user: UserAggregate = UserAggregate.with(command.username);
    this.repository.save(user);
  }
}
