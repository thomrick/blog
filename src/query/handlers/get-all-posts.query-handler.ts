import { PostRepository } from '../../domain';
import { GetAllPostsQuery } from '../queries';
import { GetAllPostsResult } from '../results';
import { QueryHandler } from './query-handler';

export class GetAllPostsQueryHandler implements QueryHandler {
  private readonly repository: PostRepository;

  constructor(repository: PostRepository) {
    this.repository = repository;
  }

  public handle(_query: GetAllPostsQuery): GetAllPostsResult {
    return new GetAllPostsResult(this.repository.getAll());
  }

  public subscribeTo(): string {
    return GetAllPostsQuery.name;
  }
}
