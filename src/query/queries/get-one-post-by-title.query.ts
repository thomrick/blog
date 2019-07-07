import { Query } from './query';

export class GetOnePostByTitle implements Query {
  public readonly queryName: string = GetOnePostByTitle.name;

  public readonly title: string;

  constructor(title: string) {
    this.title = title;
  }
}
