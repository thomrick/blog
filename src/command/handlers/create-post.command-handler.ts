import { PostAggregate,  PostRepository } from '../../domain';
import { CreatePost } from '../create-post.command';
import { CommandHandler } from './command-handler';

export class CreatePostCommandHandler implements CommandHandler {
  private readonly repository: PostRepository;

  constructor(repository: PostRepository) {
    this.repository = repository;
  }

  public handle(command: CreatePost): void {
    const post: PostAggregate = PostAggregate.with(command.author, command.title, command.content);
    this.repository.save(post);
  }

  public subscribeTo(): string {
    return CreatePost.name;
  }
}
