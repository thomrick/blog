import { Body, Controller, Post } from '@nestjs/common';
import { PostAggregate } from '../../domain';
import { CreatePostDto } from './dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  private readonly service: PostsService;

  constructor(service: PostsService) {
    this.service = service;
  }

  @Post()
  public create(@Body() dto: CreatePostDto): PostAggregate {
    return this.service.create(dto);
  }
}
