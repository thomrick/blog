import { PostAggregate } from '../../domain';
import { CommandResult } from './command-result';

export class CreatePostCommandResult implements CommandResult {
  private readonly data: PostAggregate | null;

  constructor(data: PostAggregate | null) {
    this.data = data;
  }

  public getData(): PostAggregate | null {
    return this.data;
  }
}
