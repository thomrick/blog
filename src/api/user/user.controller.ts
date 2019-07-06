import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateUserDto, UserDto } from './dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  private readonly service: UserService;

  constructor(service: UserService) {
    this.service = service;
  }

  @Post('user')
  public create(@Body() dto: CreateUserDto): UserDto {
    return this.service.create(dto);
  }

  @Get('user')
  public findOne(@Query('username') username?: string): UserDto {
    throw new Error('Method not implemented');
  }
}
