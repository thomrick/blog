import { forwardRef, Module } from '@nestjs/common';
import { UsersModule } from '../users';
import { PostsController } from './posts.controller';
import { PostsRepository } from './posts.repository';
import { PostsService } from './posts.service';

@Module({
  imports: [
    forwardRef(() => UsersModule),
  ],
  controllers: [
    PostsController,
  ],
  providers: [
    PostsService,
    PostsRepository,
  ],
  exports: [
    PostsRepository,
  ],
})
export class PostsModule {}
