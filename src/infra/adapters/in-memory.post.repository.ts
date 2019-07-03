import { PostAggregate, PostRepository } from '../../domain';

export class InMemoryPostRepository implements PostRepository {

  private database: Map<string, PostAggregate>;

  constructor(database: Map<string, PostAggregate> = new Map()) {
    this.database = database;
  }

  public save(post: PostAggregate): void {
    this.database.set(post.getId(), post);
  }

  public get(id: string): PostAggregate | null {
    const aggregate: PostAggregate | undefined = this.database.get(id);
    return !!aggregate ? aggregate : null;
  }
}
