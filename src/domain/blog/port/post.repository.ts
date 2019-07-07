import { PostAggregate } from '../aggregate';

export interface PostRepository {
  save(post: PostAggregate): void;
  get(id: string): PostAggregate | null;
  getAll(): PostAggregate[];
}
