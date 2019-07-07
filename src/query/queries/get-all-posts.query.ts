import { Query } from './query';

export class GetAllPost implements Query {
  public readonly queryName: string = GetAllPost.name;
}
