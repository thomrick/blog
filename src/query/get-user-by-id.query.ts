import { Query } from './query';

export class GetUserById implements Query {
  public readonly name: string = GetUserById.name;
  public readonly id: string;

  constructor(id: string) {
    this.id = id;
  }
}
