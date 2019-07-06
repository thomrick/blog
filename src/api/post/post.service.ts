import { Injectable } from '@nestjs/common';
import { CreatePost } from '../../command';
import { PostAggregate } from '../../domain';
import { CommandBus } from '../../infra/bus';
import { CreatePostDto } from './dto';

@Injectable()
export class PostService {
  private readonly bus: CommandBus;

  constructor(bus: CommandBus) {
    this.bus = bus;
  }

  public create(dto: CreatePostDto): PostAggregate {
    this.bus.dispatch(new CreatePost(dto.author, dto.title, dto.content));
    throw new Error('Method not implemented');
  }
}
