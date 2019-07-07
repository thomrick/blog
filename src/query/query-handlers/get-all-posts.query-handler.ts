import { PostRepository } from '../../domain';
import { GetAllPostsQuery } from '../queries';
import { GetAllPostsQueryResult } from '../query-results';
import { QueryHandler } from './query-handler';

export class GetAllPostsQueryHandler implements QueryHandler {
  private readonly repository: PostRepository;

  constructor(repository: PostRepository) {
    this.repository = repository;
  }

  public handle(_query: GetAllPostsQuery): GetAllPostsQueryResult {
    return new GetAllPostsQueryResult(this.repository.getAll());
  }

  public subscribeTo(): string {
    return GetAllPostsQuery.name;
  }
}
