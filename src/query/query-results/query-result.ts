export abstract class QueryResult {
  protected readonly data: any;

  constructor(data: any) {
    this.data = data;
  }

  public abstract getData(): any;
}
