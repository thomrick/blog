import { forwardRef, Module } from '@nestjs/common';
import { BusModule } from '../../infra/bus';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  imports: [
    forwardRef(() => BusModule),
  ],
  controllers: [
    PostsController,
  ],
  providers: [
    PostsService,
  ],
})
export class PostsModule {}
