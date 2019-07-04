import { CommentAggregate, PostAggregate, UserAggregate } from './aggregates';
import { CreateCommentHandler } from './create-comment.handler';
import { CommentRepository, PostRepository, UserRepository } from './ports';

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
