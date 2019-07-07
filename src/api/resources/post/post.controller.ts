import { Controller, Get } from '@nestjs/common';
import { PostDto } from './dto';
import { PostService } from './post.service';

@Controller()
export class PostController {
  private readonly service: PostService;

  constructor(service: PostService) {
    this.service = service;
  }

  @Get('posts')
  public findAll(): PostDto[] {
    return this.service.findAll();
  }
}
