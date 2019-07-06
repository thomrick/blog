import { PostAggregate, PostRepository } from '../../domain';
import { GetAllPostsQuery } from '../queries';
import { GetAllPostsResult } from '../results';
import { GetAllPostsQueryHandler } from './get-all-posts.query-handler';
import { QueryHandler } from './query-handler';

describe('GetAllPostQueryHandler', () => {
  it('should get all posts from respository', () => {
    const posts: PostAggregate[] = [
      PostAggregate.with('author1', 'title1', 'content1'),
      PostAggregate.with('author2', 'title2', 'content2'),
      PostAggregate.with('author3', 'title3', 'content3'),
    ];
    const repository: PostRepository = {
      get: jest.fn(),
      getAll: jest.fn().mockReturnValue(posts),
      save: jest.fn(),
    };
    const handler: QueryHandler = new GetAllPostsQueryHandler(repository);

    const result: GetAllPostsResult = handler.handle(new GetAllPostsQuery());

    expect(repository.getAll).toHaveBeenCalled();
    expect(result).toEqual(new GetAllPostsResult(posts));
  });
});
