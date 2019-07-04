export class CreatePost {
  public readonly author: string;
  public readonly title: string;
  public readonly content: string;

  constructor(author: string, title: string, content: string) {
    this.author = author;
    this.title = title;
    this.content = content;
  }
}
