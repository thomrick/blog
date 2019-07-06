import { UserAggregate, UserRepository } from '../../domain';
import { GetUserByIdQuery } from '../queries';
import { GetUserByIdResult } from '../results';
import { QueryHandler } from './query-handler';

export class GetUserByIdQueryHandler implements QueryHandler {
  private readonly repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  public handle(query: GetUserByIdQuery): GetUserByIdResult {
    const user: UserAggregate | null = this.repository.get(query.id);
    return new GetUserByIdResult(user);
  }

  public subscribeTo(): string {
    return GetUserByIdQuery.name;
  }
}
