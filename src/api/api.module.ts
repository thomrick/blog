import { Module } from '@nestjs/common';
import { PostModule } from './post';
import { UserModule } from './user';

@Module({
  imports: [
    PostModule,
    UserModule,
  ],
})
export class ApiModule {}
