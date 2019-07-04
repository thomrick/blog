import { forwardRef, Module } from '@nestjs/common';
import { PostsModule } from '../posts';
import { UsersModule } from '../users';
import { CommentsController } from './comments.controller';
import { CommentsRepository } from './comments.repository';
import { CommentsService } from './comments.service';

@Module({
  imports: [
    forwardRef(() => PostsModule),
    forwardRef(() => UsersModule),
  ],
  controllers: [
    CommentsController,
  ],
  providers: [
    CommentsService,
    CommentsRepository,
  ],
  exports: [
    CommentsRepository,
  ],
})
export class CommentsModule {}
