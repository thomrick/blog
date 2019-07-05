import { Injectable } from '@nestjs/common';
import { PostAggregate } from '../../domain';
import { CreatePostDto } from './dto';

@Injectable()
export class PostsService {
  public create(dto: CreatePostDto): PostAggregate {
    const post: PostAggregate = PostAggregate.with(dto.author, dto.title, dto.content);
    return post;
  }
}
