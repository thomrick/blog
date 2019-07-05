import { Query } from '../queries';
import { Result } from '../results';

export interface QueryHandler {
  handle(query: Query): Result;
  subscribeTo(): string;
}
