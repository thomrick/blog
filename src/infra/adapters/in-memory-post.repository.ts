import { PostAggregate, PostEvent, PostRepository } from '../../domain';

export class InMemoryPostRepository implements PostRepository {
  private readonly database: Map<string, PostEvent[]>;

  constructor(database: Map<string, PostEvent[]> = new Map()) {
    this.database = database;
  }

  public save(post: PostAggregate): void {
    throw new Error('Method not implemented.');
  }

  public get(id: string): PostAggregate {
    throw new Error('Method not implemented.');
  }

  public getAll(): PostAggregate[] {
    const aggregates: PostAggregate[] = [];
    return aggregates;
  }
}
