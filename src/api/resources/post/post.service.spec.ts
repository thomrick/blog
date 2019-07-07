import { Test, TestingModule } from '@nestjs/testing';
import { PostAggregate } from '../../../domain';
import { QueryBus } from '../../../infra';
import { GetAllPostsQuery, GetAllPostsQueryResult } from '../../../query';
import { QUERY_BUS_TOKEN } from '../../adapters';
import { PostDto } from './dto';
import { PostService } from './post.service';

describe('PostService', () => {
  describe('findAll', () => {
    let module: TestingModule;
    let service: PostService;

    beforeEach(async () => {
      module = await Test.createTestingModule({
        providers: [
          PostService,
          {
            provide: QUERY_BUS_TOKEN,
            useValue: {
              ask: jest.fn(),
            },
          },
        ],
      })
      .compile();
      service = module.get(PostService);
    });
    it('should query to find all posts', async () => {
      // GIVEN
      const bus: QueryBus = module.get(QUERY_BUS_TOKEN);
      spyOn(bus, 'ask').and.returnValue(new GetAllPostsQueryResult([]));
      // WHEN
      service.findAll();
      // THEN
      expect(bus.ask).toHaveBeenCalledWith(new GetAllPostsQuery());
    });

    it('sould map the result to an dto', async () => {
      // GIVEN
      const aggregates: PostAggregate[] = [
        PostAggregate.with('authorA', 'titleA', 'contentA'),
        PostAggregate.with('authorB', 'titleB', 'contentB'),
        PostAggregate.with('authorC', 'titleC', 'contentC'),
      ];
      const bus: QueryBus = module.get(QUERY_BUS_TOKEN);
      spyOn(bus, 'ask').and.returnValue(new GetAllPostsQueryResult(aggregates));
      // WHEN
      const dto: PostDto[] = service.findAll();
      // THEN
      expect(dto).toEqual(aggregates.map((aggregate) => PostDto.from(aggregate)));
    });
  });
});
