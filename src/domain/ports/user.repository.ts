import { User } from '../user';

export interface UserRepository {
  save(user: User): void;
  get(id: string): User | null;
}
