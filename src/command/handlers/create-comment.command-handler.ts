import { CommentAggregate, CommentRepository } from '../../domain';
import { CreateCommentCommand } from '../commands';
import { CommandHandler } from './command-handler';

export class CreateCommentCommandHandler implements CommandHandler {
  private readonly repository: CommentRepository;

  constructor(repository: CommentRepository) {
    this.repository = repository;
  }

  public handle(command: CreateCommentCommand): void {
    const comment: CommentAggregate = CommentAggregate.with(command.author, command.post, command.text);
    this.repository.save(comment);
  }

  public subscribeTo(): string {
    return CreateCommentCommand.name;
  }
}
