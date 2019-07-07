import { PostAggregate, PostRepository } from '../../domain';
import { CreatePostCommandResult } from '../command-results';
import { CreatePostCommand } from '../commands';
import { CommandHandler } from './command-handler';

export class CreatePostCommandHandler implements CommandHandler {
  private readonly repository: PostRepository;

  constructor(repository: PostRepository) {
    this.repository = repository;
  }

  public handle(command: CreatePostCommand): CreatePostCommandResult {
    const aggretate: PostAggregate = PostAggregate.with(command.author, command.title, command.content);
    this.repository.save(aggretate);
    return new CreatePostCommandResult(aggretate);
  }

  public subscribeTo(): string {
    return CreatePostCommand.name;
  }
}
