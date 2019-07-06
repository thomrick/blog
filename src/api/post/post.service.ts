import { Inject, Injectable } from '@nestjs/common';
import { CreatePostCommand } from '../../command';
import { PostAggregate } from '../../domain';
import { COMMAND_BUS_TOKEN, CommandBus, QUERY_BUS_TOKEN, QueryBus } from '../../infra/bus';
import { GetAllPostsQuery, GetAllPostsResult } from '../../query';
import { CreatePostDto, PostDto } from './dto';

@Injectable()
export class PostService {
  private readonly commandBus: CommandBus;
  private readonly queryBus: QueryBus;

  constructor(@Inject(COMMAND_BUS_TOKEN) commandBus: CommandBus, @Inject(QUERY_BUS_TOKEN) queryBus: QueryBus) {
    this.commandBus = commandBus;
    this.queryBus = queryBus;
  }

  public create(dto: CreatePostDto): PostAggregate {
    this.commandBus.dispatch(new CreatePostCommand(dto.author, dto.title, dto.content));
    throw new Error('Method not implemented');
  }

  public getAll(): PostDto[] {
    const result: GetAllPostsResult = this.queryBus.ask(new GetAllPostsQuery());
    return result.getData().map((post) => PostDto.from(post));
  }
}
