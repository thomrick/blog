import { PostRepository } from '../../domain';
import { GetAllPostQuery } from '../queries';
import { GetAllPostsQueryHandler } from './get-all-posts.query-handler';
import { QueryHandler } from './query-handler';

describe('GetAllPostsQueryHandler', () => {
  describe('handle', () => {
    it('should get all post from repository', () => {
      // GIVEN
      const repository: PostRepository = {
        get: jest.fn(),
        getAll: jest.fn(),
        save: jest.fn(),
      };
      const handler: QueryHandler = new GetAllPostsQueryHandler(repository);
      // WHEN
      handler.handle(new GetAllPostQuery());
      // THEN
      expect(repository.getAll).toHaveBeenCalled();
    });
  });

  describe('subscribeTo', () => {
    it('should return the handled query name', () => {
      // GIVEN
      const repository: PostRepository = {
        get: jest.fn(),
        getAll: jest.fn(),
        save: jest.fn(),
      };
      const handler: QueryHandler = new GetAllPostsQueryHandler(repository);
      // WHEN
      const queryName: string = handler.subscribeTo();
      // THEN
      expect(queryName).toEqual(GetAllPostQuery.name);
    });
  });
});
