import { Test, TestingModule } from '@nestjs/testing';
import {
  AddCommentCommand,
  AddCommentCommandResult,
  CreatePostCommand,
  CreatePostCommandResult,
} from '../../../command';
import { PostAggregate } from '../../../domain';
import { CommandBus, QueryBus } from '../../../infra';
import { GetAllPostsQuery, GetAllPostsQueryResult } from '../../../query';
import { QUERY_BUS_TOKEN } from '../../adapters';
import { COMMAND_BUS_TOKEN } from '../../adapters/bus/command-bus.provider';
import { AddCommentDto, CreatePostDto, PostDto } from './dto';
import { PostService } from './post.service';

describe('PostService', () => {
  let module: TestingModule;
  let service: PostService;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [
        PostService,
        {
          provide: COMMAND_BUS_TOKEN,
          useValue: {
            dispatch: jest.fn(),
          },
        },
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

  describe('create', () => {
    let bus: CommandBus;

    beforeEach(() => {
      bus = module.get(COMMAND_BUS_TOKEN);
    });

    it('should dispatch a create post command', () => {
      // GIVEN
      const dto = new CreatePostDto('author', 'title', 'content');
      spyOn(bus, 'dispatch').and.returnValue(
        new CreatePostCommandResult(PostAggregate.with(dto.author, dto.title, dto.content),
      ));
      // WHEN
      service.create(dto);
      // THEN
      expect(bus.dispatch).toHaveBeenCalledWith(new CreatePostCommand(dto.author, dto.title, dto.content));
    });

    it('should return the created post', () => {
      // GIVEN
      const dto = new CreatePostDto('author', 'title', 'content');
      const aggregate = PostAggregate.with(dto.author, dto.title, dto.content);
      spyOn(bus, 'dispatch').and.returnValue(new CreatePostCommandResult(aggregate));
      // WHEN
      const response: PostDto =  service.create(dto);
      // THEN
      expect(response).toEqual(PostDto.from(aggregate));
    });
  });

  describe('findAll', () => {
    let bus: QueryBus;

    beforeEach(() => {
      bus = module.get(QUERY_BUS_TOKEN);
    });

    it('should query to find all posts', async () => {
      // GIVEN
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
      spyOn(bus, 'ask').and.returnValue(new GetAllPostsQueryResult(aggregates));
      // WHEN
      const dto: PostDto[] = service.findAll();
      // THEN
      expect(dto).toEqual(aggregates.map((aggregate) => PostDto.from(aggregate)));
    });
  });

  describe('addCommentTo', () => {
    let aggregate: PostAggregate;
    let bus: CommandBus;

    beforeEach(() => {
      aggregate = PostAggregate.with('author', 'title', 'content');
      bus = module.get(COMMAND_BUS_TOKEN);
      spyOn(bus, 'dispatch').and.returnValue(new AddCommentCommandResult(aggregate));
    });

    it('should dispatch a add comment command', () => {
      // GIVEN
      const dto: AddCommentDto = new AddCommentDto('author', 'text');
      // WHEN
      service.addCommentTo(aggregate.getProjection().getId(), dto);
      // THEN
      expect(bus.dispatch).toHaveBeenCalledWith(
        new AddCommentCommand(aggregate.getProjection().getId(), dto.author, dto.text),
      );
    });

    it('should return the updated post with comment', () => {
      // GIVEN
      const dto: AddCommentDto = new AddCommentDto('author', 'text');
      // WHEN
      const response: PostDto = service.addCommentTo(aggregate.getProjection().getId(), dto);
      // THEN
      expect(response).toEqual(PostDto.from(aggregate));
    });
  });
});
