import { UserAggregate, UserRepository } from '../../domain';
import { GetUserById } from '../get-user-by-id.query';
import { GetUserByIdResult } from './get-user-by-id.result';
import { QueryHandler } from './query-handler';

export class GetUserByIdQueryHandler implements QueryHandler {
  private readonly repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  public handle(query: GetUserById): GetUserByIdResult {
    const user: UserAggregate | null = this.repository.get(query.id);
    return new GetUserByIdResult(user);
  }

  public subscribeTo(): string {
    throw new Error('Method not implemented.');
  }
}
