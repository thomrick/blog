import { UserAggregate } from '../aggregates';
import { UserEvent } from './user.event';

export class UserCreated implements UserEvent {
  public readonly userId: string;
  public readonly email: string;
  public readonly password: string;
  public readonly username: string;

  constructor(userId: string, email: string, password: string, username: string) {
    this.userId = userId;
    this.email = email;
    this.password = password;
    this.username = username;
  }

  public apply(user: UserAggregate): UserAggregate {
    return user.apply(this);
  }
}
