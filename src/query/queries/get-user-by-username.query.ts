import { Query } from './query';

export class GetUserByUsernameQuery implements Query {
  public readonly name: string = GetUserByUsernameQuery.name;
  public readonly username: string;

  constructor(username: string) {
    this.username = username;
  }
}
