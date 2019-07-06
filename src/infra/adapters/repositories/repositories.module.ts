import { Module } from '@nestjs/common';
import { CommentRepositoryProvider } from './comment-repository.provider';
import { PostRepositoryProvider } from './post-repository.provider';
import { UserRepositoryProvider } from './user-repository.provider';

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
