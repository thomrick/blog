import { UserAggregate } from '../aggregates';

export interface UserEvent {
  apply(user: UserAggregate): UserAggregate;
}
