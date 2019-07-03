import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain';
import { USER_REPOSITORY_TOKEN } from './users.repository';

@Injectable()
export class UsersService {
  private readonly repository: UserRepository;

  constructor(@Inject(USER_REPOSITORY_TOKEN) repository: UserRepository) {
    this.repository = repository;
  }
}
