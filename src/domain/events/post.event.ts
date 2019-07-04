import { PostAggregate } from '../aggregates';

export interface PostEvent {
  apply(post: PostAggregate): PostAggregate;
}
