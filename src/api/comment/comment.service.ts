import { Injectable } from '@nestjs/common';
import { CommentAggregate } from '../../domain';
import { CreateCommentDto } from './dto';

@Injectable()
export class CommentService {
  public create(dto: CreateCommentDto): CommentAggregate {
    const comment: CommentAggregate = CommentAggregate.with(dto.author, dto.post, dto.text);
    return comment;
  }
}
