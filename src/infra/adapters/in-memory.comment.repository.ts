import { CommentAggregate, CommentRepository } from '../../domain';

export class InMemoryCommentRepository implements CommentRepository {

  private database: Map<string, CommentAggregate>;

  constructor(database: Map<string, CommentAggregate> = new Map()) {
    this.database = database;
  }

  public save(comment: CommentAggregate): void {
    this.database.set(comment.getId(), comment);
  }

  public get(id: string): CommentAggregate | null {
    const comment: CommentAggregate | undefined = this.database.get(id);
    return !!comment ? comment : null;
  }
}
