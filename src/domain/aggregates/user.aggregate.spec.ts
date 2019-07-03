import { UserAggregate } from './user.aggregate';

describe('UserAggregate', () => {
  it('should create a user', () => {
    const username: string = 'username';

    const user: UserAggregate = UserAggregate.with('username');

    expect(user.getUsername()).toEqual(username);
  });
});
