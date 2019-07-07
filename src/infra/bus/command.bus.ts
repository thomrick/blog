import { Command, CommandHandler, CommandResult } from '../../command';

export class CommandBus {
  private readonly handlers: Map<string, CommandHandler>;

  constructor(handlers: CommandHandler[]) {
    this.handlers = new Map(handlers.map((handler) => [handler.subscribeTo(), handler]));
  }

  public dispatch(command: Command): CommandResult {
    const handler: CommandHandler | undefined = this.handlers.get(command.commandName);
    if (!!handler) {
      return handler.handle(command);
    }
    throw new Error(`Command ${command.commandName} is not supported`);
  }
}
