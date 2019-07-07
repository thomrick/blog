import uuid from 'uuid/v1';
import { CommentAdded, PostCreated, PostEvent } from '../event';
import { Comment } from '../model';

export class PostAggregate {

  private id!: string;
  private author!: string;
  private title!: string;
  private content!: string;
  private comments!: Comment[];

  private changes: PostEvent[] = [];

  public static with(author: string, title: string, content: string): PostAggregate {
    return new PostAggregate(uuid(), author, title, content);
  }

  public static rebuild(events: PostEvent[]): PostAggregate {
    return events.reduce((post, event) => event.apply(post), new PostAggregate());
  }

  private constructor(id?: string, author?: string, title?: string, content?: string) {
    if (!!id && !!author && !!title && !!content) {
      const event: PostCreated = new PostCreated(id, author, title, content);
      this.apply(event);
      this.save(event);
    }
  }

  public add(comment: Comment): void {
    const event = new CommentAdded(this.id, comment);
    this.apply(event);
    this.save(event);
  }

  public apply(event: PostEvent): PostAggregate {
    switch (event.eventName) {
      case PostCreated.name:
        return this.applyCreatePost(event as PostCreated);
      case CommentAdded.name:
        return this.applyAddComment(event as CommentAdded);
      default:
        return this;
    }
  }

  public applyCreatePost(event: PostCreated): PostAggregate {
    this.id = event.postId;
    this.author = event.author;
    this.title = event.title;
    this.content = event.content;
    this.comments = [];
    return this;
  }

  public applyAddComment(event: CommentAdded): PostAggregate {
    this.comments.push(event.comment);
    return this;
  }

  public getId(): string {
    return this.id;
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

  private save(event: PostEvent): void {
    this.changes.push(event);
  }

  public getUncommittedChanges(): PostEvent[] {
    return this.changes;
  }
}
