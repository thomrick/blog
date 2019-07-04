import uuid from 'uuid/v1';
import { UserCreated, UserEvent } from '../events';

export class UserAggregate {

  private id!: string;
  private username!: string;

  private changes: UserEvent[] = [];

  public static with(username: string): UserAggregate {
    return new UserAggregate(uuid(), username);
  }

  private constructor(id?: string, username?: string) {
    if (!!id && !!username) {
      const event: UserCreated = new UserCreated(id, username);
      this.apply(event);
      this.save(event);
    }
  }

  public getId(): string {
    return this.id;
  }

  public getUsername(): string {
    return this.username;
  }

  public apply(event: UserCreated): UserAggregate {
    this.id = event.id;
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
