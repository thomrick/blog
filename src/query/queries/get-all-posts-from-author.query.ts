import { Query } from './query';

export class GetAllPostsFromAuthorQuery implements Query {
  public readonly queryName: string = GetAllPostsFromAuthorQuery.name;

  public readonly author: string;

  constructor(author: string) {
    this.author = author;
  }
}
