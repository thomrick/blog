import { Command } from './command';

export class AddComment implements Command {
  public readonly commandName: string = AddComment.name;

  public readonly postId: string;
  public readonly author: string;
  public readonly text: string;

  constructor(postId: string, author: string, text: string) {
    this.postId = postId;
    this.author = author;
    this.text = text;
  }
}
