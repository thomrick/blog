import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AddCommentDto, CreatePostDto, PostDto } from './dto';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  private readonly service: PostService;

  constructor(service: PostService) {
    this.service = service;
  }

  @Post()
  public create(@Body() dto: CreatePostDto): PostDto {
    return this.service.create(dto);
  }

  @Get()
  public findAll(): PostDto[] {
    return this.service.findAll();
  }

  @Put(':id/comments')
  public addCommentTo(@Param('id') postId: string, @Body() dto: AddCommentDto): PostDto {
    return this.service.addCommentTo(postId, dto);
  }
}
