import { Query } from './query';

export class GetOnePostByIdQuery implements Query {
  public readonly queryName: string = GetOnePostByIdQuery.name;

  public readonly postId: string;

  constructor(postId: string) {
    this.postId = postId;
  }
}
