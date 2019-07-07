import uuid from 'uuid/v1';
import { PostCreated, PostEvent } from '../event';

export class PostAggregate {

  private id!: string;
  private author!: string;
  private title!: string;
  private content!: string;

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

  public apply(event: PostCreated): PostAggregate {
    this.id = event.id;
    this.author = event.author;
    this.title = event.title;
    this.content = event.content;
    return this;
  }

  public getId(): string {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getContent(): string {
    return this.content;
  }

  public getAuthor(): string {
    return this.author;
  }

  private save(event: PostEvent): void {
    this.changes.push(event);
  }

  public getUncommittedChanges(): PostEvent[] {
    return this.changes;
  }
}
