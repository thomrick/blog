import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostDto, PostDto } from './dto';
import { PostService } from './post.service';

@Controller()
export class PostController {
  private readonly service: PostService;

  constructor(service: PostService) {
    this.service = service;
  }

  @Post('post')
  public create(@Body() dto: CreatePostDto): PostDto {
    return this.service.create(dto);
  }

  @Get('posts')
  public findAll(): PostDto[] {
    return this.service.findAll();
  }
}
