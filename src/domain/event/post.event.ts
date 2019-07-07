import { PostAggregate } from '../aggregate';
import { PostProjection } from '../projection';

export interface PostEvent {
  readonly eventName: string;
  apply(post: PostProjection): PostProjection;
}
