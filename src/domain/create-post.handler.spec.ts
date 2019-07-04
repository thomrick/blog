import { PostAggregate, UserAggregate } from './aggregates';
import { CreatePostHandler } from './create-post.handler';
import { PostRepository, UserRepository } from './ports';

describe('CreatePostHandler', () => {
  it('should save the created post', () => {
    const user: UserAggregate = UserAggregate.with('username');
    const users: UserRepository = {
      save: jest.fn(),
      get: jest.fn().mockReturnValue(user),
    };
    const posts: PostRepository = {
      save: jest.fn(),
      get: jest.fn(),
    };
    const handler: CreatePostHandler = new CreatePostHandler(users, posts);

    const post: PostAggregate = handler.handle(user.getId(), 'title', 'content');

    expect(posts.save).toHaveBeenCalledWith(post);
  });
});
