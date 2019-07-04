import uuid from 'uuid/v1';
import { UserCreated, UserEvent } from '../events';
import { UserAggregate } from './user.aggregate';

describe('UserAggregate', () => {
  it('should create a user', () => {
    const username: string = 'username';

    const user: UserAggregate = UserAggregate.with(username);

    expect(user.getUsername()).toEqual(username);
  });

  it('should add a user created event', () => {
    const username: string = 'username';

    const user: UserAggregate = UserAggregate.with(username);

    expect(user.getUncommittedChanges()).toContainEqual(new UserCreated(user.getId(), user.getUsername()));
  });

  it('should rebuild the aggregate from events', () => {
    const id: string = uuid();
    const events: UserEvent[] = [ new UserCreated(id, 'username') ];

    const user: UserAggregate = UserAggregate.rebuild(events);

    expect(user.getId()).toEqual(id);
    expect(user.getUsername()).toEqual('username');
  });
});
