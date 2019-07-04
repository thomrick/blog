import uuid from 'uuid/v1';
import { UserAggregate } from './user.aggregate';

export class PostAggregate {

  private id: string;
  private author: UserAggregate;
  private title: string;
  private content: string;

  public static with(author: UserAggregate, title: string, content: string): PostAggregate {
    return new PostAggregate(uuid(), author, title, content);
  }

  private constructor(id: string, author: UserAggregate, title: string, content: string) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.content = content;
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

  public getAuthor(): UserAggregate {
    return this.author;
  }
}
