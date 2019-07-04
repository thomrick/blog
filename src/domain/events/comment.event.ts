import { CommentAggregate } from '../aggregates';

export interface CommentEvent {
  apply(comment: CommentAggregate): CommentAggregate;
}
