import uuid from 'uuid/v1';

export class User {

  private id: string;
  private username: string;

  public static with(username: string): User {
    return new User(uuid(), username);
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
