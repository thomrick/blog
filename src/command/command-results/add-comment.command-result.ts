import { PostAggregate } from '../../domain';
import { CommandResult } from './command-result';

export class AddCommentCommandResult extends CommandResult {
  public getData(): PostAggregate {
    return this.data;
  }
}
