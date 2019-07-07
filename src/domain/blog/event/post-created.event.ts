import { PostProjection } from '../projection';
import { PostEvent } from './post.event';

export class PostCreated implements PostEvent {
  public readonly eventName: string = PostCreated.name;

  public readonly postId: string;
  public readonly author: string;
  public readonly title: string;
  public readonly content: string;

  constructor(postId: string, author: string, title: string, content: string) {
    this.postId = postId;
    this.author = author;
    this.title = title;
    this.content = content;
  }

  public apply(post: PostProjection): PostProjection {
    return post.state().apply(this);
  }
}
