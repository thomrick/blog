import { Comment, PostAggregate, PostRepository } from '../../domain';
import { AddCommentCommandResult } from '../command-results';
import { AddComment } from '../commands';
import { CommandHandler } from './command-handler';

export class AddCommentCommandHandler implements CommandHandler {
  private readonly repository: PostRepository;

  constructor(repository: PostRepository) {
    this.repository = repository;
  }

  public handle(command: AddComment): AddCommentCommandResult {
    const aggregate: PostAggregate = this.repository.get(command.postId) as PostAggregate;
    aggregate.add(new Comment(command.author, command.text));
    this.repository.save(aggregate);
    return new AddCommentCommandResult(aggregate);
  }

  public subscribeTo(): string {
    return AddComment.name;
  }
}
