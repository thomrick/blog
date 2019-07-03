import { User, UserRepository } from '../../domain';

export class InMemoryUserRepository implements UserRepository {

  public save(user: User): void {
    throw new Error('Method not implemented.');
  }

  public get(id: string): User | null {
    throw new Error('Method not implemented.');
  }

}
