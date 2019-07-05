import { Injectable } from '@nestjs/common';
import { UserAggregate } from '../../domain';
import { CreateUserDto } from './dto';

@Injectable()
export class UsersService {
  public create(dto: CreateUserDto): UserAggregate {
    throw new Error('Method not implemented');
  }
}
