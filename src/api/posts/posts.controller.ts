import { Controller } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  private readonly service: PostsService;

  constructor(service: PostsService) {
    this.service = service;
  }
}
