import { Provider } from '@nestjs/common';
import { PostRepository } from '../../../domain';
import { GetAllPostsQueryHandler, QueryHandler } from '../../../query';
import { POST_REPOSITORY_TOKEN } from '../repositories';

export const QUERY_HANDLERS_TOKEN: string = 'QueryHandlers';

export const QueryHandlersProvider: Provider = {
  provide: QUERY_HANDLERS_TOKEN,
  useFactory: (repository: PostRepository): QueryHandler[] => {
    return [
      new GetAllPostsQueryHandler(repository),
    ];
  },
  inject: [
    POST_REPOSITORY_TOKEN,
  ],
};
