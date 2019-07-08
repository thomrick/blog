import { PostAggregate, PostEvent, PostRepository } from '../../domain';

export class InMemoryPostRepository implements PostRepository {
  private readonly database: Map<string, PostEvent[]>;

  constructor(database: Map<string, PostEvent[]> = new Map()) {
    this.database = database;
  }

  public save(post: PostAggregate): void {
    this.database.set(post.getProjection().getId(), post.getUncommittedChanges());
  }

  public get(id: string): PostAggregate | null {
    const events: PostEvent[] | undefined = this.database.get(id);
    return !!events ? new PostAggregate(events) : null;
  }

  public getAll(): PostAggregate[] {
    const aggregates: PostAggregate[] = [];
    const iterator: Iterator<PostEvent[]> = this.database.values();
    let next: IteratorResult<PostEvent[]> = iterator.next();
    while (!next.done) {
      aggregates.push(new PostAggregate(next.value));
      next = iterator.next();
    }
    return aggregates;
  }
}
