import { Query } from './query';

export class GetAllPostQuery implements Query {
  public readonly queryName: string = GetAllPostQuery.name;
}
