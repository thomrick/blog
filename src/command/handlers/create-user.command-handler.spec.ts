import { UserAggregate, UserRepository } from '../../domain';
import { CreateUserCommand } from '../commands';
import { CommandHandler } from './command-handler';
import { CreateUserCommandHandler } from './create-user.command-handler';

describe('CreateUserCommandHandler', () => {
  const email: string = 'email';
  const password: string = 'password';
  const username: string = 'username';

  it('should save the created user', () => {
    const repository: UserRepository = {
      save: jest.fn(),
      get: jest.fn(),
      findByUsername: jest.fn(),
      findByEmail: jest.fn().mockReturnValue(null),
    };
    const handler: CommandHandler = new CreateUserCommandHandler(repository);

    handler.handle(new CreateUserCommand(email, password, username));

    expect(repository.findByEmail).toHaveBeenCalledWith(email);
    expect(repository.save).toHaveBeenCalled();
  });

  it('should throw an error when user already exist', () => {
    const user = UserAggregate.with(email, password, username);
    const repository: UserRepository = {
      save: jest.fn(),
      get: jest.fn(),
      findByUsername: jest.fn(),
      findByEmail: jest.fn().mockReturnValue(user),
    };
    const handler: CommandHandler = new CreateUserCommandHandler(repository);

    expect(
      () => handler.handle(new CreateUserCommand(user.getEmail(), user.getPassword(), user.getUsername())),
    )
    .toThrow();
  });
});
