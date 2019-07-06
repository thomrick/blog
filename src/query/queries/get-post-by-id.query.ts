import { Query } from './query';

export class GetPostByIdQuery implements Query {
  public readonly name: string = GetPostByIdQuery.name;

  public readonly postId: string;

  constructor(postId: string) {
    this.postId = postId;
  }
}
