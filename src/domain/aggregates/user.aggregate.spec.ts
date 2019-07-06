import uuid from 'uuid/v1';
import { UserCreated, UserEvent } from '../events';
import { UserAggregate } from './user.aggregate';

describe('UserAggregate', () => {
  const email: string = 'email';
  const password: string = 'password';
  const username: string = 'username';

  it('should create a user', () => {
    const user: UserAggregate = UserAggregate.with(email, password, username);

    expect(user.getEmail()).toEqual(email);
    expect(user.getPassword()).toEqual(password);
    expect(user.getUsername()).toEqual(username);
  });

  it('should add a user created event', () => {
    const user: UserAggregate = UserAggregate.with(email, password, username);

    expect(user.getUncommittedChanges()).toContainEqual(
      new UserCreated(user.getId(), user.getEmail(), user.getPassword(), user.getUsername()),
    );
  });

  it('should rebuild the aggregate from events', () => {
    const id: string = uuid();
    const events: UserEvent[] = [
      new UserCreated(id, email, password, username),
    ];

    const user: UserAggregate = UserAggregate.rebuild(events);

    expect(user.getId()).toEqual(id);
    expect(user.getEmail()).toEqual(email);
    expect(user.getPassword()).toEqual(password);
    expect(user.getUsername()).toEqual(username);
  });
});
