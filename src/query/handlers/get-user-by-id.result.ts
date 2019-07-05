import { UserAggregate } from '../../domain';
import { Result } from '../result';

export class GetUserByIdResult extends Result {
  public getData(): UserAggregate | null {
    return this.data;
  }
}
