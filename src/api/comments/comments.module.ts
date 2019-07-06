import { forwardRef, Module } from '@nestjs/common';
import { BusModule } from '../../infra/bus';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';

@Module({
  imports: [
    forwardRef(() => BusModule),
  ],
  controllers: [
    CommentsController,
  ],
  providers: [
    CommentsService,
  ],
})
export class CommentsModule {}
