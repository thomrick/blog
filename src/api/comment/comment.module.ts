import { forwardRef, Module } from '@nestjs/common';
import { BusModule } from '../../infra/bus';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';

@Module({
  imports: [
    forwardRef(() => BusModule),
  ],
  controllers: [
    CommentController,
  ],
  providers: [
    CommentService,
  ],
})
export class CommentModule {}
