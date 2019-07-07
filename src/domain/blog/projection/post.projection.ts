import { CommentAdded, PostCreated, PostEvent } from '../event';
import { Comment } from '../model';

export interface StateApplier {
  apply(event: PostEvent): PostProjection;
}

export class PostProjection {
  private postId!: string;
  private author!: string;
  private title!: string;
  private content!: string;
  private comments!: Comment[];

  public getId(): string {
    return this.postId;
  }

  public getAuthor(): string {
    return this.author;
  }

  public getTitle(): string {
    return this.title;
  }

  public getContent(): string {
    return this.content;
  }

  public getComments(): Comment[] {
    return this.comments;
  }

  public state(): StateApplier {
    return ((projection: PostProjection) => {
      const applyCreatePost = (event: PostCreated): PostProjection => {
        projection.postId = event.postId;
        projection.author = event.author;
        projection.title = event.title;
        projection.content = event.content;
        projection.comments = [];
        return projection;
      };

      const applyCommentAdded = (event: CommentAdded): PostProjection => {
        projection.comments.push(event.comment);
        return projection;
      };

      return {
        apply(event: PostEvent): PostProjection {
          switch (event.eventName) {
            case PostCreated.name:
              return applyCreatePost(event as PostCreated);
            case CommentAdded.name:
              return applyCommentAdded(event as CommentAdded);
            default:
              return projection;
          }
        },
      };
    })(this);
  }
}
