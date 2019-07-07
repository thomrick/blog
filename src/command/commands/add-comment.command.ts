import { Command } from './command';

export class AddCommentCommand implements Command {
  public readonly commandName: string = AddCommentCommand.name;

  public readonly postId: string;
  public readonly author: string;
  public readonly text: string;

  constructor(postId: string, author: string, text: string) {
    this.postId = postId;
    this.author = author;
    this.text = text;
  }
}
