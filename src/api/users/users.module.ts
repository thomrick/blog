import { Module } from '@nestjs/common';
import { UsersCommandBus } from './users.command-bus';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

@Module({
  controllers: [
    UsersController,
  ],
  providers: [
    UsersService,
    UsersRepository,
    UsersCommandBus,
  ],
})
export class UsersModule {}
