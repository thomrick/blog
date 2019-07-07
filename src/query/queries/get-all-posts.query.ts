import { Query } from './query';

export class GetAllPostsQuery implements Query {
  public readonly queryName: string = GetAllPostsQuery.name;
}
