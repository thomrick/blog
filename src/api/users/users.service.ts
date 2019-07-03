import { Inject, Injectable } from '@nestjs/common';
import { UserAggregate, UserRepository } from '../../domain';
import { CreateUserDto } from './dto';
import { USER_REPOSITORY_TOKEN } from './users.repository';

@Injectable()
export class UsersService {
  private readonly repository: UserRepository;

  constructor(@Inject(USER_REPOSITORY_TOKEN) repository: UserRepository) {
    this.repository = repository;
  }

  public create(dto: CreateUserDto): UserAggregate {
    const user: UserAggregate = UserAggregate.with(dto.username);
    this.repository.save(user);
    return user;
  }
}
