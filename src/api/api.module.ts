import { Module } from '@nestjs/common';
import { CommentModule } from './comment';
import { PostModule } from './post';
import { UserModule } from './user';

@Module({
  imports: [
    CommentModule,
    PostModule,
    UserModule,
  ],
})
export class ApiModule {}
