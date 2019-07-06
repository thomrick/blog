import { PostAggregate } from '../../../domain';

export class PostDto {
  public readonly id: string;
  public readonly author: string;
  public readonly title: string;
  public readonly content: string;

  private constructor(id: string, author: string, title: string, content: string) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.content = content;
  }

  public static from(post: PostAggregate): PostDto {
    return new PostDto(post.getId(), post.getAuthor(), post.getTitle(), post.getContent());
  }
}
