import { forwardRef, Module } from '@nestjs/common';
import { InfraModule } from '../../infra';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [
    forwardRef(() => InfraModule),
  ],
  controllers: [
    PostController,
  ],
  providers: [
    PostService,
  ],
})
export class PostModule {}
