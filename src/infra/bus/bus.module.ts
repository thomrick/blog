import { forwardRef, Module } from '@nestjs/common';
import { CommandModule } from '../../command';
import { CommandBus } from './command.bus';

@Module({
  imports: [
    forwardRef(() => CommandModule),
  ],
  providers: [
    CommandBus,
  ],
  exports: [
    CommandBus,
  ],
})
export class BusModule {}
