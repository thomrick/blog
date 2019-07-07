import { forwardRef, Module } from '@nestjs/common';
import { AdaptersModule } from '../../adapters';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [
    forwardRef(() => AdaptersModule),
  ],
  controllers: [
    PostController,
  ],
  providers: [
    PostService,
  ],
})
export class PostModule {}
