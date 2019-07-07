import { CommandResult } from '../command-results';
import { Command } from '../commands';

export interface CommandHandler {
  handle(command: Command): CommandResult;
  subscribeTo(): string;
}
