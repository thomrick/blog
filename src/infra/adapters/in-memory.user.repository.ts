import { UserAggregate, UserRepository } from '../../domain';

export class InMemoryUserRepository implements UserRepository {

  private database: Map<string, UserAggregate>;

  constructor(database: Map<string, UserAggregate> = new Map<string, UserAggregate>()) {
    this.database = database;
  }

  public save(user: UserAggregate): void {
    this.database.set(user.getId(), user);
  }

  public get(id: string): UserAggregate | null {
    const aggregate: UserAggregate | undefined = this.database.get(id);
    return !!aggregate ? aggregate : null;
  }

  public findByUsername(username: string): UserAggregate | null {
    throw new Error('Method not implemented');
  }

}
