import { Query, QueryHandler, QueryResult } from '../../query';

export class QueryBus {
  private readonly handlers: Map<string, QueryHandler>;

  constructor(handlers: QueryHandler[]) {
    this.handlers = new Map(handlers.map((handler) => [handler.subscribeTo(), handler]));
  }

  public ask(query: Query): QueryResult {
    const handler: QueryHandler | undefined = this.handlers.get(query.queryName);
    if (!!handler) {
      return handler.handle(query);
    }
    throw new Error(`Query ${query.queryName} is not supported.`);
  }
}
