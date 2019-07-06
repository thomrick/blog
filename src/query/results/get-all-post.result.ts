import { PostAggregate } from '../../domain';
import { Result } from './result';

export class GetAllPostResult extends Result {
  public getData(): PostAggregate[] {
    return this.data;
  }
}
