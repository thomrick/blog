import { PostAggregate,  PostRepository } from '../../domain';
import { CreatePostCommand } from '../commands';
import { CommandHandler } from './command-handler';

export class CreatePostCommandHandler implements CommandHandler {
  private readonly repository: PostRepository;

  constructor(repository: PostRepository) {
    this.repository = repository;
  }

  public handle(command: CreatePostCommand): void {
    const post: PostAggregate = PostAggregate.with(command.author, command.title, command.content);
    this.repository.save(post);
  }

  public subscribeTo(): string {
    return CreatePostCommand.name;
  }
}
