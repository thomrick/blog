import { PostAggregate } from '../../domain';
import { CommandResult } from './command-result';

export class CreatePostCommandResult extends CommandResult {
  public getData(): PostAggregate {
    return this.data;
  }
}
