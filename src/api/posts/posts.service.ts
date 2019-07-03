import { Inject, Injectable } from '@nestjs/common';
import { PostRepository } from '../../domain';
import { POST_REPOSITORY_TOKEN } from './posts.repository';

@Injectable()
export class PostsService {
  private readonly repository: PostRepository;

  constructor(@Inject(POST_REPOSITORY_TOKEN) repository: PostRepository) {
    this.repository = repository;
  }
}
