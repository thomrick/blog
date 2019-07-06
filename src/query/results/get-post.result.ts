import { PostAggregate } from '../../domain';
import { Result } from './result';

export abstract class GetPostResult extends Result {
  public getData(): PostAggregate | null {
    return this.data;
  }
}
