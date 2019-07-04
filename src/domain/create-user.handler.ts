import { UserAggregate } from './aggregates';
import { UserRepository } from './ports';

export class CreateUserHandler {
  private readonly repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  public create(username: string): UserAggregate {
    const user: UserAggregate = UserAggregate.with(username);
    this.repository.save(user);
    return user;
  }
}
