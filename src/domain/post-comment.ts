import uuid from 'uuid/v1';
import { BlogPost } from './blog-post';
import { User } from './user';

export class PostComment {

  private id: string;
  private author: User;
  private post: BlogPost;
  private text: string;

  public static with(author: User, post: BlogPost, text: string): PostComment {
    return new PostComment(uuid(), author, post, text);
  }

  private constructor(id: string, author: User, post: BlogPost, text: string) {
    this.id = id;
    this.author = author;
    this.post = post;
    this.text = text;
  }

  public getId(): string {
    return this.id;
  }

  public getAuthor(): User {
    return this.author;
  }

  public getPost(): BlogPost {
    return this.post;
  }

  public getText(): string {
    return this.text;
  }
}
