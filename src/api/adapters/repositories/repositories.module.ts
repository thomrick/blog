import { Module } from '@nestjs/common';
import { PostRepositoryProvider } from './post-repository.provider';

@Module({
  providers: [
    PostRepositoryProvider,
  ],
  exports: [
    PostRepositoryProvider,
  ],
})
export class RepositoriesModule {}
