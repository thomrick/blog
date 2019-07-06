import { forwardRef, Module } from '@nestjs/common';
import { BusModule } from '../../infra/bus';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [
    forwardRef(() => BusModule),
  ],
  controllers: [
    PostController,
  ],
  providers: [
    PostService,
  ],
})
export class PostModule {}
