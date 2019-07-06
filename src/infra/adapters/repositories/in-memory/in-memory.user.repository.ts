import { UserAggregate, UserRepository } from '../../../../domain';
import { UserEvent } from '../../../../domain/events';

export class InMemoryUserRepository implements UserRepository {

  private database: Map<string, UserEvent[]>;
  private indexes: Map<string, Map<string, string>> = new Map<string, Map<string, string>>();

  constructor(database: Map<string, UserEvent[]> = new Map<string, UserEvent[]>()) {
    this.database = database;
    this.indexes.set('username', new Map());
  }

  public save(user: UserAggregate): void {
    this.initializeIfNeeded(user);
    this.database.set(
      user.getId(),
      (this.database.get(user.getId())  as UserEvent[]).concat(user.getUncommittedChanges()),
    );
  }

  private initializeIfNeeded(user: UserAggregate): void {
    if (!this.database.has(user.getId())) {
      this.createDatabaseEntryFor(user);
      this.createUsernameIndexFor(user);
    }
  }

  private createDatabaseEntryFor(user: UserAggregate): void {
    this.database.set(user.getId(), []);
  }

  private createUsernameIndexFor(user: UserAggregate): void {
    const index: Map<string, string> = this.indexes.get('username') as Map<string, string>;
    index.set(user.getUsername(), user.getId());
    this.indexes.set('username', index);
  }

  public get(id: string): UserAggregate | null {
    const events: UserEvent[] | undefined = this.database.get(id);
    return !!events ? UserAggregate.rebuild(events) : null;
  }

  public findByUsername(username: string): UserAggregate | null {
    const index: Map<string, string> = this.indexes.get('username') as Map<string, string>;
    const userId: string | undefined = index.get(username);
    return !!userId ? this.get(userId) : null;
  }
}
