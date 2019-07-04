import uuid from 'uuid/v1';

export class CommentAggregate {

  private id: string;
  private author: string;
  private post: string;
  private text: string;

  public static with(author: string, post: string, text: string): CommentAggregate {
    return new CommentAggregate(uuid(), author, post, text);
  }

  private constructor(id: string, author: string, post: string, text: string) {
    this.id = id;
    this.author = author;
    this.post = post;
    this.text = text;
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
}
