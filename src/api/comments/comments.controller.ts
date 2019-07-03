import { Controller } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  private readonly service: CommentsService;

  constructor(service: CommentsService) {
    this.service = service;
  }
}
