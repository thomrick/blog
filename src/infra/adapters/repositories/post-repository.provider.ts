import { Provider } from '@nestjs/common';
import { PostRepository } from '../../../domain';
import { InMemoryPostRepository } from './in-memory';

export const POST_REPOSITORY_TOKEN: string = 'PostRepository';

export const PostRepositoryProvider: Provider = {
  provide: POST_REPOSITORY_TOKEN,
  useFactory: (): PostRepository => {
    return new InMemoryPostRepository();
  },
};
