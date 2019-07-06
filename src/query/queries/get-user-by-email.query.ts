import { Query } from './query';

export class GetUserByEmailQuery implements Query {
  public readonly name: string = GetUserByEmailQuery.name;

  public readonly email: string;

  constructor(email: string) {
    this.email = email;
  }
}
