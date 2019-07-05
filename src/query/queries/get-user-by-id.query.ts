import { Query } from './query';

export class GetUserByIdQuery implements Query {
  public readonly name: string = GetUserByIdQuery.name;
  public readonly id: string;

  constructor(id: string) {
    this.id = id;
  }
}
