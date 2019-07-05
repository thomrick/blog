import { Body, Controller, Post } from '@nestjs/common';
import { UserAggregate } from '../../domain';
import { CreateUserDto } from './dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  private readonly service: UserService;

  constructor(service: UserService) {
    this.service = service;
  }

  @Post()
  public create(@Body() dto: CreateUserDto): UserAggregate {
    return this.service.create(dto);
  }
}
