import { Inject, Injectable } from '@nestjs/common';
import { PostAggregate, PostRepository } from '../../domain';
import { CreatePostDto } from './dto';
import { POST_REPOSITORY_TOKEN } from './posts.repository';

@Injectable()
export class PostsService {
  private readonly repository: PostRepository;

  constructor(@Inject(POST_REPOSITORY_TOKEN) repository: PostRepository) {
    this.repository = repository;
  }

  public create(dto: CreatePostDto): PostAggregate {
    throw new Error('Method not implemented');
  }
}
