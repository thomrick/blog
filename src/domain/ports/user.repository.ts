import { UserAggregate } from '../aggregates';

export interface UserRepository {
  save(user: UserAggregate): void;
  get(id: string): UserAggregate | null;
}
