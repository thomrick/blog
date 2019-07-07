import { PostAggregate } from '../../domain';
import { QueryResult } from './query-result';

export class GetOnePostQueryResult implements QueryResult {
  private readonly data: PostAggregate | null;

  constructor(data: PostAggregate | null) {
    this.data = data;
  }

  public getData(): PostAggregate | null {
    return this.data;
  }
}
