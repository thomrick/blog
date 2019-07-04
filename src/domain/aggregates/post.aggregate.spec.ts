import uuid from 'uuid/v1';
import { PostCreated, PostEvent } from '../events';
import { PostAggregate } from './post.aggregate';

describe('PostAggregate', () => {
  it('should create a blog post', () => {
    const author: string = uuid();
    const title: string = 'title';
    const content: string = 'content';

    const post: PostAggregate = PostAggregate.with(author, title, content);

    expect(post.getAuthor()).toEqual(author);
    expect(post.getTitle()).toEqual(title);
    expect(post.getContent()).toEqual(content);
  });

  it('should add a post created event', () => {
    const author: string = uuid();
    const title: string = 'title';
    const content: string = 'content';

    const post: PostAggregate = PostAggregate.with(author, title, content);

    expect(post.getUncommittedChanges()).toContainEqual(new PostCreated(post.getId(), author, title, content));
  });

  it('should rebuild the aggregate from events', () => {
    const id: string = uuid();
    const events: PostEvent[] = [ new PostCreated(id, uuid(), 'title', 'content') ];

    const post: PostAggregate = PostAggregate.rebuild(events);
  });
});
