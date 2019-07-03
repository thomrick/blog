import { Inject, Injectable } from '@nestjs/common';
import { CommentAggregate, CommentRepository } from '../../domain';
import { COMMENT_REPOSITORY_TOKEN } from './comments.repository';
import { CreateCommentDto } from './dto';

@Injectable()
export class CommentsService {
  private readonly repository: CommentRepository;

  constructor(@Inject(COMMENT_REPOSITORY_TOKEN) repository: CommentRepository) {
    this.repository = repository;
  }

  public create(dto: CreateCommentDto): CommentAggregate {
    throw new Error('Method not implemented');
  }
}
