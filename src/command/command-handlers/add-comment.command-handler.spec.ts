import { PostAggregate, PostRepository } from '../../domain';
import { Comment } from '../../domain/model';
import { AddCommentCommandResult, CommandResult } from '../command-results';
import { AddCommentCommand } from '../commands';
import { AddCommentCommandHandler } from './add-comment.command-handler';
import { CommandHandler } from './command-handler';

describe('AddCommentCommandHandler', () => {
  let repository: PostRepository;
  let handler: CommandHandler;

  beforeEach(() => {
    repository = {
      get: jest.fn(),
      getAll: jest.fn(),
      save: jest.fn(),
    };
    handler = new AddCommentCommandHandler(repository);
  });

  describe('handle', () => {
    let post: PostAggregate;
    let comment: Comment;

    let getSpy: jasmine.Spy;

    beforeEach(() => {
      post = PostAggregate.with('author', 'title', 'content');
      getSpy = spyOn(repository, 'get').and.returnValue(post);
      comment = new Comment('author', 'text');
    });
    it('should get the post aggregate from repository', () => {
      // GIVEN
      // WHEN
      handler.handle(new AddCommentCommand(post.getProjection().getId(), comment.getAuthor(), comment.getText()));
      // THEN
      expect(getSpy).toHaveBeenCalledWith(post.getProjection().getId());
    });

    it('should save the post aggregate in repository after applying add comment', () => {
      // GIVEN
      // WHEN
      handler.handle(new AddCommentCommand(post.getProjection().getId(), comment.getAuthor(), comment.getText()));
      // THEN
      expect(repository.save).toHaveBeenCalledWith(post);
    });

    it('should return the updated aggregate result', () => {
      // GIVEN
      // WHEN
      const result: CommandResult = handler.handle(
        new AddCommentCommand(post.getProjection().getId(), comment.getAuthor(), comment.getText()),
      );
      // THEN
      expect(result).toEqual(new AddCommentCommandResult(post));
    });
  });

  describe('subscribeTo', () => {
    it('should return the handled command name', () => {
      expect(handler.subscribeTo()).toEqual(AddCommentCommand.name);
    });
  });
});
