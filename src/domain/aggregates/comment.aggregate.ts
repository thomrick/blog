import uuid from 'uuid/v1';
import { PostAggregate } from './post.aggregate';
import { UserAggregate } from './user.aggregate';

export class CommentAggregate {

  private id: string;
  private author: UserAggregate;
  private post: PostAggregate;
  private text: string;

  public static with(author: UserAggregate, post: PostAggregate, text: string): CommentAggregate {
    return new CommentAggregate(uuid(), author, post, text);
  }

  private constructor(id: string, author: UserAggregate, post: PostAggregate, text: string) {
    this.id = id;
    this.author = author;
    this.post = post;
    this.text = text;
  }

  public getId(): string {
    return this.id;
  }

  public getAuthor(): UserAggregate {
    return this.author;
  }

  public getPost(): PostAggregate {
    return this.post;
  }

  public getText(): string {
    return this.text;
  }
}
