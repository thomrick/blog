import uuid from 'uuid/v1';
import { CommentAdded, PostCreated, PostEvent } from '../event';
import { Comment } from '../model';
import { PostProjection } from '../projection';
import { PostAggregate } from './post.aggregate';

describe('PostAggregate', () => {
  const author: string = 'author';
  const title: string = 'title';
  const content: string = 'content';

  it('should create a blog post', () => {
    const aggregate: PostAggregate = PostAggregate.with(author, title, content);

    const projection: PostProjection = aggregate.getProjection();
    expect(projection.getAuthor()).toEqual(author);
    expect(projection.getTitle()).toEqual(title);
    expect(projection.getContent()).toEqual(content);
    expect(projection.getComments()).toEqual([]);
  });

  it('should add a post created event', () => {
    const aggregate: PostAggregate = PostAggregate.with(author, title, content);

    const projection: PostProjection = aggregate.getProjection();
    expect(aggregate.getUncommittedChanges()).toContainEqual(
      new PostCreated(
        projection.getId(),
        projection.getAuthor(),
        projection.getTitle(),
        projection.getContent(),
      ),
    );
  });

  it('should add a comment', () => {
    const aggregate: PostAggregate = PostAggregate.with(author, title, content);
    const comment: Comment = new Comment('otherAuthor', 'text');

    aggregate.add(comment);

    expect(aggregate.getProjection().getComments()).toContainEqual(comment);
  });

  it('should add a comment added event', () => {
    const post: PostAggregate = PostAggregate.with(author, title, content);
    const comment: Comment = new Comment('otherAuthor', 'text');

    post.add(comment);

    expect(post.getUncommittedChanges()).toContainEqual(new CommentAdded(post.getProjection().getId(), comment));
  });

  it('should rebuild the aggregate from events', () => {
    const postId: string = uuid();
    const events: PostEvent[] = [ new PostCreated(postId, author, title, content) ];

    const aggregate: PostAggregate = new PostAggregate(events);

    const projection: PostProjection = aggregate.getProjection();
    expect(projection.getId()).toEqual(postId);
    expect(projection.getAuthor()).toEqual(author);
    expect(projection.getTitle()).toEqual(title);
    expect(projection.getContent()).toEqual(content);
    expect(projection.getComments()).toEqual([]);
  });
});
