import { Query } from '../queries';
import { QueryResult } from '../query-results';

export interface QueryHandler {
  handle(query: Query): QueryResult;
}
