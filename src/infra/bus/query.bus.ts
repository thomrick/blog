import { Inject, Injectable } from '@nestjs/common';
import { Query, QUERY_HANDLERS_TOKEN, QueryHandler, Result } from '../../query';

@Injectable()
export class QueryBus {
  private readonly handlers: Map<string, QueryHandler>;

  constructor(@Inject(QUERY_HANDLERS_TOKEN) handlers: QueryHandler[]) {
    this.handlers = handlers.reduce((acc, handler) => acc.set(handler.subscribeTo(), handler), new Map());
  }

  public ask(query: Query): Result {
    const handler: QueryHandler | undefined = this.handlers.get(query.name);
    if (!!handler) {
      return handler.handle(query);
    }
    throw new Error(`Query ${query.name} is not supported`);
  }
}
