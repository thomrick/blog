import { Inject, Injectable } from '@nestjs/common';
import { QueryBus } from '../../../infra';
import { GetAllPostsQuery, GetAllPostsQueryResult } from '../../../query';
import { QUERY_BUS_TOKEN } from '../../adapters';
import { PostDto } from './dto';

@Injectable()
export class PostService {
  private readonly queryBus: QueryBus;

  constructor(@Inject(QUERY_BUS_TOKEN) queryBus: QueryBus) {
    this.queryBus = queryBus;
  }

  public findAll(): PostDto[] {
    const result: GetAllPostsQueryResult = this.queryBus.ask(new GetAllPostsQuery());
    return result.getData().map((aggregate) => PostDto.from(aggregate));
  }
}
