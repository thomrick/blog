import { PostAggregate } from '../../domain';
import { Result } from './result';

export class GetAllPostsResult extends Result {
  public getData(): PostAggregate[] {
    return this.data;
  }
}
