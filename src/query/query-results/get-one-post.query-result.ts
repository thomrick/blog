import { PostAggregate } from '../../domain';
import { QueryResult } from './query-result';

export class GetOnePostQueryResult extends QueryResult {
  public getData(): PostAggregate | null {
    return this.data;
  }
}
