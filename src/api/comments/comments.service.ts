import { Inject, Injectable } from '@nestjs/common';
import { CommentAggregate, CommentRepository } from '../../domain';
import { COMMENT_REPOSITORY_TOKEN } from './comments.repository';
import { CreateCommentDto } from './dto';

@Injectable()
export class CommentsService {
  private readonly comments: CommentRepository;

  constructor(@Inject(COMMENT_REPOSITORY_TOKEN) comments: CommentRepository) {
    this.comments = comments;
  }

  public create(dto: CreateCommentDto): CommentAggregate {
    const comment: CommentAggregate = CommentAggregate.with(dto.author, dto.post, dto.text);
    this.comments.save(comment);
    return comment;
  }
}
