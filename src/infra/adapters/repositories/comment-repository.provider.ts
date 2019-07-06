import { Provider } from '@nestjs/common';
import { CommentRepository } from '../../../domain';
import { InMemoryCommentRepository } from './in-memory';

export const COMMENT_REPOSITORY_TOKEN: string = 'CommentRepository';

export const CommentRepositoryProvider: Provider = {
  provide: COMMENT_REPOSITORY_TOKEN,
  useFactory: (): CommentRepository => {
    return new InMemoryCommentRepository();
  },
};
