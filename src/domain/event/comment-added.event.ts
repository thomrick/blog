import { Comment } from '../model';
import { PostProjection } from '../projection';
import { PostEvent } from './post.event';

export class CommentAdded implements PostEvent {
  public readonly eventName: string = CommentAdded.name;

  public readonly postId: string;
  public readonly comment: Comment;

  constructor(postId: string, comment: Comment) {
    this.postId = postId;
    this.comment = comment;
  }

  public apply(post: PostProjection): PostProjection {
    return post.state().apply(this);
  }
}
