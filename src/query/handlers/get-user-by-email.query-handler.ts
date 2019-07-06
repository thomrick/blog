import { UserRepository } from '../../domain';
import { GetUserByEmailQuery } from '../queries';
import { GetUserByEmailResult } from '../results';
import { QueryHandler } from './query-handler';

export class GetUserByEmailQueryHandler implements QueryHandler {
  private readonly repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  public handle(query: GetUserByEmailQuery): GetUserByEmailResult {
    return new GetUserByEmailResult(this.repository.findByEmail(query.email));
  }

  public subscribeTo(): string {
    return GetUserByEmailQuery.name;
  }
}
