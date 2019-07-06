import { UserAggregate, UserRepository } from '../../domain';
import { CreateUserCommand } from '../commands';
import { CommandHandler } from './command-handler';
import { CreateUserCommandHandler } from './create-user.command-handler';

describe('CreateUserCommandHandler', () => {
  it('should save the created user', () => {
    const repository: UserRepository = {
      save: jest.fn(),
      get: jest.fn(),
      findByUsername: jest.fn().mockReturnValue(null),
    };
    const handler: CommandHandler = new CreateUserCommandHandler(repository);

    handler.handle(new CreateUserCommand('username'));

    expect(repository.findByUsername).toHaveBeenCalledWith('username');
    expect(repository.save).toHaveBeenCalled();
  });

  it('should throw an error when user already exist', () => {
    const user = UserAggregate.with('username');
    const repository: UserRepository = {
      save: jest.fn(),
      get: jest.fn(),
      findByUsername: jest.fn().mockReturnValue(user),
    };
    const handler: CommandHandler = new CreateUserCommandHandler(repository);

    expect(() => handler.handle(new CreateUserCommand(user.getUsername()))).toThrow();
  });
});
