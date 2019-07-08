import { PostAggregate, PostRepository } from '../../domain';
import { CommandResult } from '../command-results';
import { CreatePostCommand } from '../commands';
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
      // GIVEN
      const handler: CommandHandler = new CreatePostCommandHandler(repository);
      // WHEN
      const result: CommandResult = handler.handle(new CreatePostCommand('author', 'title', 'content'));
      // THEN
      expect(repository.save).toHaveBeenCalled();
      expect(result.getData() instanceof PostAggregate).toBeTruthy();
    });
  });

  describe('subscribeTo', () => {
    it('should return the handled command name', () => {
      // GIVEN
      // WHEN
      const handler: CommandHandler = new CreatePostCommandHandler(repository);
      // THEN
      expect(handler.subscribeTo()).toEqual(CreatePostCommand.name);
    });
  });
});
