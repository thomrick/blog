import { CommentAggregate, PostAggregate, UserAggregate } from './aggregates';
import { CommentRepository, PostRepository, UserRepository } from './ports';

export class CreateCommentHandler {
  private readonly users: UserRepository;
  private readonly posts: PostRepository;
  private readonly comments: CommentRepository;

  constructor(users: UserRepository, posts: PostRepository, comments: CommentRepository) {
    this.users = users;
    this.posts = posts;
    this.comments = comments;
  }

  public handle(authorId: string, postId: string, text: string): CommentAggregate {
    const author: UserAggregate = this.users.get(authorId) as UserAggregate;
    const post: PostAggregate = this.posts.get(postId) as PostAggregate;
    const comment: CommentAggregate = CommentAggregate.with(author, post, text);
    this.comments.save(comment);
    return comment;
  }
}

describe('CreateCommentHandler', () => {
  it('should save the created comment', () => {
    const author: UserAggregate = UserAggregate.with('username');
    const post: PostAggregate = PostAggregate.with(author, 'title', 'content');
    const users: UserRepository = {
      save: jest.fn(),
      get: jest.fn().mockReturnValue(author),
    };
    const posts: PostRepository = {
      save: jest.fn(),
      get: jest.fn().mockReturnValue(post),
    };
    const comments: CommentRepository = {
      save: jest.fn(),
      get: jest.fn(),
    };
    const handler: CreateCommentHandler = new CreateCommentHandler(users, posts, comments);

    const comment: CommentAggregate = handler.handle(author.getId(), post.getId(), 'text');

    expect(comments.save).toHaveBeenCalledWith(comment);
  });
});
