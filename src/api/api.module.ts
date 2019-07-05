import { Module } from '@nestjs/common';
import { CommentsModule } from './comments';
import { PostsModule } from './posts';
import { UserModule } from './user';

@Module({
  imports: [
    CommentsModule,
    PostsModule,
    UserModule,
  ],
})
export class ApiModule {}
