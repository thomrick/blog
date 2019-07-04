import { PostAggregate } from '../aggregates';
import { PostEvent } from './post.event';

export class PostCreated implements PostEvent {

  public readonly id: string;
  public readonly author: string;
  public readonly title: string;
  public readonly content: string;

  constructor(id: string, author: string, title: string, content: string) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.content = content;
  }

  public apply(post: PostAggregate): PostAggregate {
    return post.apply(this);
  }
}
