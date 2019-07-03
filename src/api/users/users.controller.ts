import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  private readonly service: UsersService;

  constructor(service: UsersService) {
    this.service = service;
  }
}
