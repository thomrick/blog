import { Inject, Injectable } from '@nestjs/common';
import { CommentAggregate, CommentRepository } from '../../domain';
import { CreateCommentDto } from './dto';

@Injectable()
export class CommentsService {
  public create(dto: CreateCommentDto): CommentAggregate {
    const comment: CommentAggregate = CommentAggregate.with(dto.author, dto.post, dto.text);
    return comment;
  }
}
