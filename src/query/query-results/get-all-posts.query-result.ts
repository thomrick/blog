import { PostAggregate } from '../../domain';
import { QueryResult } from './query-result';

export class GetAllPostsQueryResult implements QueryResult {
  private readonly data: PostAggregate[];

  constructor(data: PostAggregate[] = []) {
    this.data = data;
  }

  public getData(): PostAggregate[] {
    return this.data;
  }
}
