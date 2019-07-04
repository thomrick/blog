import { UserAggregate } from './aggregates';
import { CreateUserHandler } from './create-user.handler';
import { UserRepository } from './ports';

describe('CreateUserHandler', () => {
  let repository: UserRepository;
  let handler: CreateUserHandler;

  beforeAll(() => {
    repository = {
      save: jest.fn(),
      get: jest.fn(),
    };
    handler = new CreateUserHandler(repository);
  });

  it('should save the user', () => {
    const user: UserAggregate = handler.create('username');

    expect(repository.save).toHaveBeenCalledWith(user);
  });
});
