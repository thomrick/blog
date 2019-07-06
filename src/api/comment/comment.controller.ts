import { Body, Controller, Post } from '@nestjs/common';
import { CommentAggregate } from '../../domain';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto';

@Controller('comments')
export class CommentController {
  private readonly service: CommentService;

  constructor(service: CommentService) {
    this.service = service;
  }

  @Post()
  public create(@Body() dto: CreateCommentDto): CommentAggregate {
    return this.service.create(dto);
  }
}
