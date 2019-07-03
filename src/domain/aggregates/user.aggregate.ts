import uuid from 'uuid/v1';

export class UserAggregate {

  private id: string;
  private username: string;

  public static with(username: string): UserAggregate {
    return new UserAggregate(uuid(), username);
  }

  private constructor(id: string, username: string) {
    this.id = id;
    this.username = username;
  }

  public getId(): string {
    return this.id;
  }

  public getUsername(): string {
    return this.username;
  }
}
