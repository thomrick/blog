import { CommentAggregate } from '../aggregates';

export interface CommentRepository {
  save(comment: CommentAggregate): void;
  get(id: string): CommentAggregate | null;
}
