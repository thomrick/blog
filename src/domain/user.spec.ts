import { User } from './user';

describe('User', () => {
  it('should create a user', () => {
    const username: string = 'username';

    const user: User = User.with('username');

    expect(user.getUsername()).toEqual(username);
  });
});
