import { PostAggregate } from '../../domain';
import { QueryResult } from './query-result';

export class GetAllPostsQueryResult extends QueryResult {
  constructor(posts: PostAggregate[] = []) {
    super(posts);
  }

  public getData(): PostAggregate[] {
    return this.data;
  }
}
