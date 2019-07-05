import { Query } from '../query';
import { Result } from '../result';

export interface QueryHandler {
  handle(query: Query): Result;
  subscribeTo(): string;
}
