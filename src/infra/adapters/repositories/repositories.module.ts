import { Module } from '@nestjs/common';
import { UserRepositoryProvider } from '../../providers';

@Module({
  providers: [
    UserRepositoryProvider,
  ],
  exports: [
    UserRepositoryProvider,
  ],
})
export class RepositoriesModule {}
