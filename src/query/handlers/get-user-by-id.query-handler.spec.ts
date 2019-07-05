import { UserAggregate, UserRepository } from '../../domain';
import { GetUserById } from '../get-user-by-id.query';
import { GetUserByIdQueryHandler } from './get-user-by-id.query-handler';
import { GetUserByIdResult } from './get-user-by-id.result';

describe('GetUserByIdQueryHandler', () => {
  it('should get user by id from repository', () => {
    const user: UserAggregate = UserAggregate.with('username');
    const repository: UserRepository = {
      save: jest.fn(),
      get: jest.fn().mockReturnValue(user),
    };
    const handler = new GetUserByIdQueryHandler(repository);

    const result: GetUserByIdResult = handler.handle(new GetUserById(user.getId()));

    expect(repository.get).toHaveBeenCalledWith(user.getId());
    expect(result.getData()).toEqual(user);
  });
});
