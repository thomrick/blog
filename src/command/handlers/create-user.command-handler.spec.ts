import { UserRepository } from '../../domain';
import { CreateUser } from '../create-user.command';
import { CommandHandler } from './command-handler';
import { CreateUserCommandHandler } from './create-user.command-handler';

describe('CreateUserCommandHandler', () => {
  it('should save the created user', () => {
    const repository: UserRepository = {
      save: jest.fn(),
      get: jest.fn(),
    };
    const handler: CommandHandler = new CreateUserCommandHandler(repository);

    handler.handle(new CreateUser('username'));

    expect(repository.save).toHaveBeenCalled();
  });
});
