import { PostAggregate, PostRepository } from '../../domain';

export class InMemoryPostRepository implements PostRepository {

  public save(post: PostAggregate): void {
    throw new Error('Method not implemented.');
  }

  public get(id: string): PostAggregate {
    throw new Error('Method not implemented.');
  }

  public getAll(): PostAggregate[] {
    throw new Error('Method not implemented.');
  }
}
