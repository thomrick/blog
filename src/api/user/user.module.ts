import { forwardRef, Module } from '@nestjs/common';
import { BusModule } from '../../infra/bus';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    forwardRef(() => BusModule),
  ],
  controllers: [
    UserController,
  ],
  providers: [
    UserService,
  ],
})
export class UserModule {}
