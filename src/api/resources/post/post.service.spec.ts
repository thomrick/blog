import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from './post.service';

describe('PostService', () => {
  describe('findAll', () => {
    xit('should query to find all posts', async () => {
      // GIVEN
      const module: TestingModule = await Test.createTestingModule({
        providers: [
          PostService,
        ],
      })
      .compile();
      const service: PostService = module.get(PostService);
      // WHEN
      service.findAll();
      // THEN
      expect(true).toBeFalsy();
    });
  });
});
