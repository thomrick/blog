import uuid from 'uuid/v1';

export class PostAggregate {

  private id: string;
  private author: string;
  private title: string;
  private content: string;

  public static with(author: string, title: string, content: string): PostAggregate {
    return new PostAggregate(uuid(), author, title, content);
  }

  private constructor(id: string, author: string, title: string, content: string) {
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

  public getAuthor(): string {
    return this.author;
  }
}
