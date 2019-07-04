import { UserAggregate } from '../aggregates';
import { UserEvent } from './user.event';

export class UserCreated implements UserEvent {
  public readonly id: string;
  public readonly username: string;

  constructor(id: string, username: string) {
    this.id = id;
    this.username = username;
  }

  public apply(user: UserAggregate): UserAggregate {
    return user.apply(this);
  }
}
