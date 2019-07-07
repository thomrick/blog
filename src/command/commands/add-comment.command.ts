import { Command } from './command';

export class AddComment implements Command {
  public readonly commandName: string = AddComment.name;

  public readonly postId: string;
  public readonly text: string;

  constructor(postId: string, text: string) {
    this.postId = postId;
    this.text = text;
  }
}
