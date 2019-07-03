import { PostAggregate } from '../aggregates';

export interface PostRepository {
  save(post: PostAggregate): void;
  get(id: string): PostAggregate | null;
}
