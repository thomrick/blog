import { Inject, Injectable } from '@nestjs/common';
import { PostAggregate, PostRepository } from '../../domain';
import { CreatePostDto } from './dto';
import { POST_REPOSITORY_TOKEN } from './posts.repository';

@Injectable()
export class PostsService {
  private readonly posts: PostRepository;

  constructor(@Inject(POST_REPOSITORY_TOKEN) posts: PostRepository) {
    this.posts = posts;
  }

  public create(dto: CreatePostDto): PostAggregate {
    const post: PostAggregate = PostAggregate.with(dto.author, dto.title, dto.content);
    this.posts.save(post);
    return post;
  }
}
