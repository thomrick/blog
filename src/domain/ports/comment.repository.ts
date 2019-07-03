import { PostAggregate } from '../aggregates';

export interface CommentRepository {
  save(comment: PostAggregate): void;
  get(id: string): PostAggregate;
}
