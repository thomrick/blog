import { Command } from './command';

export class CreatePost implements Command {
  public readonly name: string = CreatePost.name;

  public readonly author: string;
  public readonly title: string;
  public readonly content: string;

  constructor(author: string, title: string, content: string) {
    this.author = author;
    this.title = title;
    this.content = content;
  }
}
