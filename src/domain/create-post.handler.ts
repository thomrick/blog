import { PostAggregate } from './aggregates';
import { PostRepository } from './ports';

export class CreatePostHandler {
  private readonly posts: PostRepository;

  constructor(posts: PostRepository) {
    this.posts = posts;
  }

  public handle(author: string, title: string, content: string): PostAggregate {
    const post: PostAggregate = PostAggregate.with(author, title, content);
    this.posts.save(post);
    return post;
  }
}
