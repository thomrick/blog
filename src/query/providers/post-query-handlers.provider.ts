import { Provider } from '@nestjs/common';
import { PostRepository } from '../../domain';
import { GetAllPostsQueryHandler, QueryHandler } from '../handlers';

export const POST_QUERY_HANDLERS_TOKEN: string = 'PostQueryHandlers';

export const PostQueryHandlers: Provider = {
  provide: POST_QUERY_HANDLERS_TOKEN,
  useFactory: (repository: PostRepository): QueryHandler[] => {
    return [
      new GetAllPostsQueryHandler(repository),
    ];
  },
};
