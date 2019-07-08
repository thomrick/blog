import { Inject, Injectable } from '@nestjs/common';
import {
  AddCommentCommand,
  AddCommentCommandResult,
  CreatePostCommand,
  CreatePostCommandResult,
} from '../../../command';
import { CommandBus, QueryBus } from '../../../infra';
import { GetAllPostsQuery, GetAllPostsQueryResult } from '../../../query';
import { COMMAND_BUS_TOKEN, QUERY_BUS_TOKEN } from '../../adapters';
import { AddCommentDto, CreatePostDto, PostDto } from './dto';

@Injectable()
export class PostService {
  private readonly commandBus: CommandBus;
  private readonly queryBus: QueryBus;

  constructor(@Inject(COMMAND_BUS_TOKEN) commandBus: CommandBus, @Inject(QUERY_BUS_TOKEN) queryBus: QueryBus) {
    this.commandBus = commandBus;
    this.queryBus = queryBus;
  }

  public create(dto: CreatePostDto): PostDto {
    const result: CreatePostCommandResult = this.commandBus.dispatch(
      new CreatePostCommand(dto.author, dto.title, dto.content),
    );
    return PostDto.from(result.getData());
  }

  public findAll(): PostDto[] {
    const result: GetAllPostsQueryResult = this.queryBus.ask(new GetAllPostsQuery());
    return result.getData().map((aggregate) => PostDto.from(aggregate));
  }

  public addCommentTo(postId: string, dto: AddCommentDto): PostDto {
    const result: AddCommentCommandResult = this.commandBus.dispatch(
      new AddCommentCommand(postId, dto.author, dto.text),
    );
    return PostDto.from(result.getData());
  }
}
