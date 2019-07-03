import { Module } from '@nestjs/common';
import { CommentsModule } from './comments';
import { PostsModule } from './posts';
import { UsersModule } from './users';

@Module({
  imports: [
    CommentsModule,
    PostsModule,
    UsersModule,
  ],
})
export class ApiModule {}
