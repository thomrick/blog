import { Comment, PostAggregate, PostProjection } from '../../../../domain';

export class PostDto {
  public readonly id: string;
  public readonly author: string;
  public readonly title: string;
  public readonly content: string;
  public readonly comments: Comment[];

  private constructor(id: string, author: string, title: string, content: string, comments: Comment[]) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.content = content;
    this.comments = comments;
  }

  public static from(aggregate: PostAggregate): PostDto {
    const projection: PostProjection = aggregate.getProjection();
    return new PostDto(
      projection.getId(),
      projection.getAuthor(),
      projection.getTitle(),
      projection.getContent(),
      projection.getComments(),
    );
  }
}
