import uuid from 'uuid/v1';
import { CommentCreated, CommentEvent } from '../events';

export class CommentAggregate {

  private id!: string;
  private author!: string;
  private post!: string;
  private text!: string;

  private changes: CommentEvent[] = [];

  public static with(author: string, post: string, text: string): CommentAggregate {
    return new CommentAggregate(uuid(), author, post, text);
  }

  public static rebuild(events: CommentEvent[]): CommentAggregate {
    return events.reduce((comment, event) => event.apply(comment), new CommentAggregate());
  }

  private constructor(id?: string, author?: string, post?: string, text?: string) {
    if (!!id && !!author && !!post && !!text) {
      const event = new CommentCreated(id, author, post, text);
      this.apply(event);
      this.save(event);
    }
  }

  public apply(event: CommentCreated): CommentAggregate {
    this.id = event.id;
    this.author = event.author;
    this.post = event.post;
    this.text = event.text;
    return this;
  }

  public getId(): string {
    return this.id;
  }

  public getAuthor(): string {
    return this.author;
  }

  public getPost(): string {
    return this.post;
  }

  public getText(): string {
    return this.text;
  }

  public getUncommittedChanges(): any {
    return this.changes;
  }

  private save(event: CommentEvent): void {
    this.changes.push(event);
  }

}
