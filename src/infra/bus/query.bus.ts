
export class QueryBus {
  // private readonly handlers: Map<string, QueryHandler>;

  // constructor(handlers: QueryHandler[]) {
  //   this.handlers = handlers.reduce((acc, handler) => acc.set(handler.subscribeTo, handler), new Map());
  // }

  // public ask(query: Query): Result {
  //   const handler: QueryHandler | undefined = this.handlers.get(query.name);
  //   if (!!handler) {
  //     return handler.handle(query);
  //   }
  //   throw new Error(`Query ${query.name} is not supported`);
  // }
}
