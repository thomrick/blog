import { Query } from './query';

export class GetOnePostById implements Query {
  public readonly queryName: string = GetOnePostById.name;

  public readonly postId: string;

  constructor(postId: string) {
    this.postId = postId;
  }
}
