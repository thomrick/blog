import { Injectable } from '@nestjs/common';
import { PostAggregate } from '../../domain';
import { CommandBus } from '../../infra/bus';
import { CreatePostDto } from './dto';

@Injectable()
export class PostsService {
  private readonly bus: CommandBus;

  constructor(bus: CommandBus) {
    this.bus = bus;
  }

  public create(dto: CreatePostDto): PostAggregate {
    return PostAggregate.with(dto.author, dto.title, dto.content);
  }
}
