export abstract class Result {
  protected data: any;

  constructor(data: any) {
    this.data = data;
  }

  public abstract getData(): any;
}
