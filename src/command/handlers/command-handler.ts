import { Command } from '../commands';

export interface CommandHandler {
  handle(command: Command): void;
  subscribeTo(): string;
}
