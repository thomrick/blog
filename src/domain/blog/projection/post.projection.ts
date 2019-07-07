// tslint:disable:max-classes-per-file
import { CommentAdded, PostCreated, PostEvent } from '../event';
import { Comment } from '../model';
import { StateApplier } from '../state-applier';

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
    return new class PostStateApplier implements StateApplier {
      private projection: PostProjection;

      constructor(projection: PostProjection) {
        this.projection = projection;
      }

      public apply(event: PostEvent): PostProjection {
        switch (event.eventName) {
          case PostCreated.name:
            return this.applyPostCreated(event as PostCreated);
          case CommentAdded.name:
            return this.applyCommentAdded(event as CommentAdded);
          default:
            return this.projection;
        }
      }

      private applyPostCreated(event: PostCreated): PostProjection {
        this.projection.postId = event.postId;
        this.projection.author = event.author;
        this.projection.title = event.title;
        this.projection.content = event.content;
        this.projection.comments = [];
        return this.projection;
      }

      private applyCommentAdded(event: CommentAdded): PostProjection {
        this.projection.comments.push(event.comment);
        return this.projection;
      }
    }(this);
  }
}
