import { PostAggregate, PostRepository } from '../../domain';
import { CreatePostCommandResult } from '../command-results';
import { CreatePost } from '../commands';
import { CommandHandler } from './command-handler';

export class CreatePostCommandHandler implements CommandHandler {
  private readonly repository: PostRepository;

  constructor(repository: PostRepository) {
    this.repository = repository;
  }

  public handle(command: CreatePost): CreatePostCommandResult {
    const aggretate: PostAggregate = PostAggregate.with(command.author, command.title, command.content);
    this.repository.save(aggretate);
    return new CreatePostCommandResult(aggretate);
  }

  public subscribeTo(): string {
    return CreatePost.name;
  }
}
