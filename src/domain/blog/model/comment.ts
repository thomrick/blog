export class Comment {
  private readonly author: string;
  private readonly text: string;

  constructor(author: string, text: string) {
    this.author = author;
    this.text = text;
  }

  public getAuthor(): string {
    return this.author;
  }

  public getText(): string {
    return this.text;
  }
}
