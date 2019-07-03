import { Inject, Injectable } from '@nestjs/common';
import { CommentRepository } from '../../domain';
import { COMMENT_REPOSITORY_TOKEN } from './comments.repository';

@Injectable()
export class CommentsService {
  private readonly repository: CommentRepository;

  constructor(@Inject(COMMENT_REPOSITORY_TOKEN) repository: CommentRepository) {
    this.repository = repository;
  }
}
