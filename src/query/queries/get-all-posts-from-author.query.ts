import { Query } from './query';

export class GetAllPostsFromAuthor implements Query {
  public readonly queryName: string = GetAllPostsFromAuthor.name;

  public readonly author: string;

  constructor(author: string) {
    this.author = author;
  }
}
