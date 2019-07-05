import { Command } from './command';

export class CreateUser implements Command {
  public readonly name: string = CreateUser.name;

  public readonly username: string;

  constructor(username: string) {
    this.username = username;
  }
}
