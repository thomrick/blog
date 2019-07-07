import { Command } from './command';

export class CreatePostCommand implements Command {
  public readonly commandName: string = CreatePostCommand.name;

  public readonly author: string;
  public readonly title: string;
  public readonly content: string;

  constructor(author: string, title: string, content: string) {
    this.author = author;
    this.title = title;
    this.content = content;
  }
}
