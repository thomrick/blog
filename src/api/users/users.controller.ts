import { Body, Controller, Post } from '@nestjs/common';
import { UserAggregate } from '../../domain';
import { CreateUserDto } from './dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  private readonly service: UsersService;

  constructor(service: UsersService) {
    this.service = service;
  }

  @Post()
  public create(@Body() dto: CreateUserDto): UserAggregate {
    return this.service.create(dto);
  }
}
