import { Body, Controller, Post } from '@nestjs/common';
import { CommentAggregate } from '../../domain';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto';

@Controller('comments')
export class CommentsController {
  private readonly service: CommentsService;

  constructor(service: CommentsService) {
    this.service = service;
  }

  @Post()
  public create(@Body() dto: CreateCommentDto): CommentAggregate {
    return this.service.create(dto);
  }
}
