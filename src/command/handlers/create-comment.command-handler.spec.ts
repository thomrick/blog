import uuid from 'uuid/v1';
import { CommentRepository } from '../../domain';
import { CreateCommentCommand } from '../commands';
import { CommandHandler } from './command-handler';
import { CreateCommentCommandHandler } from './create-comment.command-handler';

describe('CreateCommentCommandHandler', () => {
  it('should save the created comment', () => {
    const repository: CommentRepository = {
      save: jest.fn(),
      get: jest.fn(),
    };
    const handler: CommandHandler = new CreateCommentCommandHandler(repository);

    handler.handle(new CreateCommentCommand(uuid(), uuid(), 'text'));

    expect(repository.save).toHaveBeenCalled();
  });
});
