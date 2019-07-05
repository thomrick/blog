import { Command } from './command';

export class CreateComment implements Command {
  public readonly name: string = CreateComment.name;

  public readonly author: string;
  public readonly post: string;
  public readonly text: string;

  constructor(author: string, post: string, text: string) {
    this.author = author;
    this.post = post;
    this.text = text;
  }
}
