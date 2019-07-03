import { Inject, Injectable } from '@nestjs/common';
import { PostAggregate, PostRepository, UserAggregate, UserRepository } from '../../domain';
import { USER_REPOSITORY_TOKEN } from '../users';
import { CreatePostDto } from './dto';
import { POST_REPOSITORY_TOKEN } from './posts.repository';

@Injectable()
export class PostsService {
  private readonly posts: PostRepository;
  private readonly users: UserRepository;

  constructor(
    @Inject(POST_REPOSITORY_TOKEN) posts: PostRepository,
    @Inject(USER_REPOSITORY_TOKEN) users: UserRepository,
  ) {
    this.posts = posts;
    this.users = users;
  }

  public create(dto: CreatePostDto): PostAggregate {
    const author: UserAggregate | null = this.users.get(dto.author);
    if (author === null) {
      throw new Error('Author not found');
    }
    const post: PostAggregate = PostAggregate.with(author, dto.title, dto.content);
    this.posts.save(post);
    return post;
  }
}
