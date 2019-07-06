import { PostAggregate, PostRepository } from '../../../../domain';
import { PostEvent } from '../../../../domain/events';

export class InMemoryPostRepository implements PostRepository {

  private database: Map<string, PostEvent[]>;

  constructor(database: Map<string, PostEvent[]> = new Map()) {
    this.database = database;
  }

  public save(post: PostAggregate): void {
    this.database.set(post.getId(), post.getUncommittedChanges());
  }

  public get(id: string): PostAggregate | null {
    const events: PostEvent[] | undefined = this.database.get(id);
    return !!events ? PostAggregate.rebuild(events) : null;
  }

  public getAll(): PostAggregate[] {
    const iterator: Iterator<PostEvent[]> = this.database.values();
    const posts: PostAggregate[] = [];
    let result: IteratorResult<PostEvent[]> = iterator.next();
    while (!result.done) {
      const events: PostEvent[] = result.value;
      posts.push(PostAggregate.rebuild(events));
      result = iterator.next();
    }
    return posts;
  }
}
