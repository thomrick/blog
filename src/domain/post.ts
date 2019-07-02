export class Post {
  private title: string;
  private content: string;

  private constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
  
  public static create(title: string, content: string): Post {
    return new Post(title, content);
  }
  
  public getTitle(): string {
    return this.title;
  }

  public getContent(): any {
    return this.content;
  }
}
