import uuid from 'uuid/v1';
import { UserCreated, UserEvent } from '../events';
interface ConstructorParams {
  id: string;
  email: string;
  password: string;
  username: string;
}

export class UserAggregate {

  private id!: string;
  private email!: string;
  private password!: string;
  private username!: string;

  private changes: UserEvent[] = [];

  public static with(email: string, password: string, username: string): UserAggregate {
    return new UserAggregate({ id: uuid(), email, password, username });
  }

  private constructor(params?: ConstructorParams) {
    if (!!params) {
      const event: UserCreated = new UserCreated(params.id, params.email, params.password, params.username);
      this.apply(event);
      this.save(event);
    }
  }

  public getId(): string {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }

  public getUsername(): string {
    return this.username;
  }

  public apply(event: UserCreated): UserAggregate {
    this.id = event.userId;
    this.email = event.email;
    this.password = event.password;
    this.username = event.username;
    return this;
  }

  private save(event: UserEvent): void {
    this.changes.push(event);
  }

  public getUncommittedChanges(): UserEvent[] {
    return this.changes;
  }

  public static rebuild(events: UserEvent[]): UserAggregate {
    return events.reduce((user, event) => event.apply(user), new UserAggregate());
  }
}
