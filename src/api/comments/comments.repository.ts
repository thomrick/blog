import { Provider } from '@nestjs/common';
import { CommentRepository } from '../../domain';
import { InMemoryCommentRepository } from '../../infra';

export const COMMENT_REPOSITORY_TOKEN: string = 'CommentsRepository';

export const CommentsRepository: Provider = {
  provide: 'CommentsRepository',
  useFactory: (): CommentRepository => {
    return new InMemoryCommentRepository();
  },
};
