import { PostAggregate } from '../aggregate';

export interface PostEvent {
  readonly eventName: string;
  apply(post: PostAggregate): PostAggregate;
}
