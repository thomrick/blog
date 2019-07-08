export class AddCommentDto {
  public readonly author: string;
  public readonly text: string;

  constructor(author: string, text: string) {
    this.author = author;
    this.text = text;
  }
}
