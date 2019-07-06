import { Injectable } from '@nestjs/common';
import { CreateComment } from '../../command';
import { CommentAggregate } from '../../domain';
import { CommandBus } from '../../infra/bus';
import { CreateCommentDto } from './dto';

@Injectable()
export class CommentService {
  private readonly bus: CommandBus;

  constructor(bus: CommandBus) {
    this.bus = bus;
  }

  public create(dto: CreateCommentDto): CommentAggregate {
    this.bus.dispatch(new CreateComment(dto.author, dto.post, dto.text));
    throw new Error('Method not implemented');
  }
}
