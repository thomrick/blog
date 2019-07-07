import { PostAggregate, PostRepository } from '../../domain';
import { CommandResult } from '../command-results';
import { CreatePost } from '../commands';
import { CommandHandler } from './command-handler';
import { CreatePostCommandHandler } from './create-post.command-handler';

describe('CreatePostCommandHandler', () => {
  const repository: PostRepository = {
    get: jest.fn(),
    getAll: jest.fn(),
    save: jest.fn(),
  };

  describe('handle', () => {
    it('should save created post', () => {
      const handler: CommandHandler = new CreatePostCommandHandler(repository);

      const result: CommandResult = handler.handle(new CreatePost('author', 'title', 'content'));

      expect(repository.save).toHaveBeenCalled();
      expect(result.getData() instanceof PostAggregate).toBeTruthy();
    });
  });

  describe('subscribeTo', () => {
    it('should return the handled command name', () => {
      const handler: CommandHandler = new CreatePostCommandHandler(repository);

      expect(handler.subscribeTo()).toEqual(CreatePost.name);
    });
  });
});
