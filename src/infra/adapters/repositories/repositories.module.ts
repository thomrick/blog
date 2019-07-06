import { Module } from '@nestjs/common';
import { UserRepositoryProvider } from './user-repository.provider';

@Module({
  providers: [
    UserRepositoryProvider,
  ],
  exports: [
    UserRepositoryProvider,
  ],
})
export class RepositoriesModule {}
