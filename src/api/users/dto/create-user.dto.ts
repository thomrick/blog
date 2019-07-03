export class CreateUserDto {
  public readonly username: string;

  constructor(username: string) {
    this.username = username;
  }
}
