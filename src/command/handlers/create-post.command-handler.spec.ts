import uuid from 'uuid/v1';
import { PostRepository } from '../../domain';
import { CreatePost } from '../create-post.command';
import { CommandHandler } from './command-handler';
import { CreatePostCommandHandler } from './create-post.command-handler';

describe('CreatePostCommandHandler', () => {
  it('should save the created post', () => {
    const repository: PostRepository = {
      save: jest.fn(),
      get: jest.fn(),
    };
    const handler: CommandHandler<CreatePost> = new CreatePostCommandHandler(repository);

    handler.handle(new CreatePost(uuid(), 'title', 'content'));

    expect(repository.save).toHaveBeenCalled();
  });
});
