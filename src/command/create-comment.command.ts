export class CreateComment {
  public readonly author: string;
  public readonly post: string;
  public readonly text: string;

  constructor(author: string, post: string, text: string) {
    this.author = author;
    this.post = post;
    this.text = text;
  }
}
