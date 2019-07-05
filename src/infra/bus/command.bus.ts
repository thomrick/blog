import { Inject, Injectable } from '@nestjs/common';
import { Command, COMMAND_HANDLERS_TOKEN, CommandHandler } from '../../command';

@Injectable()
export class CommandBus {
  private readonly handlers: Map<string, CommandHandler>;

  constructor(@Inject(COMMAND_HANDLERS_TOKEN) handlers: CommandHandler[]) {
    this.handlers = handlers.reduce((acc, handler) => acc.set(handler.subscribeTo(), handler), new Map());
  }

  public dispatch(command: Command): void {
    const handler: CommandHandler | undefined = this.handlers.get(command.name);
    if (!!handler) {
      return handler.handle(command);
    }
    throw new Error(`Command ${command.name} is not supported`);
  }
}
