import { PostAggregate, UserAggregate } from './aggregates';
import { PostRepository, UserRepository } from './ports';

export class CreatePostHandler {
  private readonly users: UserRepository;
  private readonly posts: PostRepository;

  constructor(users: UserRepository, posts: PostRepository) {
    this.users = users;
    this.posts = posts;
  }

  public handle(author: string, title: string, content: string): PostAggregate {
    const user: UserAggregate = this.users.get(author) as UserAggregate;
    const post: PostAggregate = PostAggregate.with(user, title, content);
    this.posts.save(post);
    return post;
  }
}
