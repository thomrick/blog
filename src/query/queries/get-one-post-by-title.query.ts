import { Query } from './query';

export class GetOnePostByTitleQuery implements Query {
  public readonly queryName: string = GetOnePostByTitleQuery.name;

  public readonly title: string;

  constructor(title: string) {
    this.title = title;
  }
}
