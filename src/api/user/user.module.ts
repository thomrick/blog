import { forwardRef, Module } from '@nestjs/common';
import { InfraModule } from '../../infra';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    forwardRef(() => InfraModule),
  ],
  controllers: [
    UserController,
  ],
  providers: [
    UserService,
  ],
})
export class UserModule {}
