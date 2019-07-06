import { UserAggregate, UserRepository } from '../../domain';
import { GetUserByUsernameQuery } from '../queries';
import { GetUserByUsernameResult } from '../results';
import { QueryHandler } from './query-handler';

export class GetUserByUsernameQueryHandler implements QueryHandler {
  private readonly repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  public handle(query: GetUserByUsernameQuery): GetUserByUsernameResult {
    const user: UserAggregate | null = this.repository.findByUsername(query.username);
    return new GetUserByUsernameResult(user);
  }

  public subscribeTo(): string {
    return GetUserByUsernameQuery.name;
  }
}
