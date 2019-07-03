import uuid from 'uuid/v1';
import { User } from './user';

export class BlogPost {

  private id: string;
  private title: string;
  private content: string;
  private author: User;

  public static with(author: User, title: string, content: string): BlogPost {
    return new BlogPost(uuid(), author, title, content);
  }

  private constructor(id: string, author: User, title: string, content: string) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.author = author;
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

  public getAuthor(): User {
    return this.author;
  }
}
