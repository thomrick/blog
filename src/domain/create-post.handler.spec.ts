import uuid from 'uuid/v1';
import { PostAggregate } from './aggregates';
import { CreatePostHandler } from './create-post.handler';
import { PostRepository } from './ports';

describe('CreatePostHandler', () => {
  it('should save the created post', () => {
    const author: string = uuid();
    const posts: PostRepository = {
      save: jest.fn(),
      get: jest.fn(),
    };
    const handler: CreatePostHandler = new CreatePostHandler(posts);

    const post: PostAggregate = handler.handle(author, 'title', 'content');

    expect(posts.save).toHaveBeenCalledWith(post);
  });
});
