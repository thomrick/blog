import { Query, Result } from '../../query';

export interface QueryBus {
  ask(query: Query): Result;
}
