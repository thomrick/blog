import { Provider } from '@nestjs/common';
import { PostRepository } from '../../domain';
import { InMemoryPostRepository } from '../../infra';

export const POST_REPOSITORY_TOKEN: string = 'PostsRepository';

export const PostsRepository: Provider = {
  provide: POST_REPOSITORY_TOKEN,
  useFactory: (): PostRepository => {
    return new InMemoryPostRepository();
  },
};
