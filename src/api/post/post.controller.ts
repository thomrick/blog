import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostAggregate } from '../../domain';
import { CreatePostDto, PostDto } from './dto';
import { PostService } from './post.service';

@Controller()
export class PostController {
  private readonly service: PostService;

  constructor(service: PostService) {
    this.service = service;
  }

  @Post('post')
  public create(@Body() dto: CreatePostDto): PostAggregate {
    return this.service.create(dto);
  }

  @Get('posts')
  public getAll(): PostDto[] {
    return this.service.getAll();
  }
}
