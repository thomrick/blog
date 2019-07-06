import { Command } from './command';

export class CreateUserCommand implements Command {
  public readonly name: string = CreateUserCommand.name;

  public readonly email: string;
  public readonly password: string;
  public readonly username: string;

  constructor(email: string, password: string, username: string) {
    this.email = email;
    this.password = password;
    this.username = username;
  }
}
