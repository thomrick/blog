import { Command } from './command';

export class CreateUserCommand implements Command {
  public readonly name: string = CreateUserCommand.name;

  public readonly username: string;

  constructor(username: string) {
    this.username = username;
  }
}
