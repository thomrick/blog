import { Command } from '../command';

export interface CommandHandler<T extends Command> {
  handle(command: T): void;
}
