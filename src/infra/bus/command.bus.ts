import { Command, CommandHandler } from '../../command';

export class CommandBus {
  private readonly handlers: Map<string, CommandHandler>;

  constructor(handlers: CommandHandler[]) {
    this.handlers = handlers.reduce((acc, handler) => acc.set(handler.subscribeTo(), handler), new Map());
  }

  public handle(command: Command): void {
    const handler: CommandHandler | undefined = this.handlers.get(command.name);
    if (!!handler) {
      return handler.handle(command);
    }
    throw new Error(`Command ${command.name} is not supported`);
  }
}
