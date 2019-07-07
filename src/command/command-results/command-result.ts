export abstract class CommandResult {
  protected readonly data: any;

  constructor(data: any) {
    this.data = data;
  }

  public abstract getData(): any;
}
