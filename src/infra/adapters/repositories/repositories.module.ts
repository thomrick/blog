import { Module } from '@nestjs/common';
import { CommentRepositoryProvider, PostRepositoryProvider, UserRepositoryProvider } from './providers';

@Module({
  providers: [
    CommentRepositoryProvider,
    PostRepositoryProvider,
    UserRepositoryProvider,
  ],
  exports: [
    CommentRepositoryProvider,
    PostRepositoryProvider,
    UserRepositoryProvider,
  ],
})
export class RepositoriesModule {}
