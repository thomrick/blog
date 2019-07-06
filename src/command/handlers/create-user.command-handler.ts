import { UserAggregate, UserAlreadyExistException, UserRepository } from '../../domain';
import { CreateUserCommand } from '../commands';
import { CommandHandler } from './command-handler';

export class CreateUserCommandHandler implements CommandHandler {
  private readonly repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  public handle(command: CreateUserCommand): void {
    if (this.isUserExist(command)) {
      throw new UserAlreadyExistException();
    }
    return this.createAndSaveUserFrom(command);
  }

  private isUserExist(command: CreateUserCommand): boolean {
    return !!this.repository.findByEmail(command.email);
  }

  private createAndSaveUserFrom(command: CreateUserCommand): void {
    const user: UserAggregate = UserAggregate.with(command.email, command.password, command.username);
    return this.repository.save(user);
  }

  public subscribeTo(): string {
    return CreateUserCommand.name;
  }
}
