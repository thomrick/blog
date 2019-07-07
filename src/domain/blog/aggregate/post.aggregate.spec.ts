import uuid from 'uuid/v1';
import { CommentAdded, PostCreated, PostEvent } from '../event';
import { Comment } from '../model';
import { PostAggregate } from './post.aggregate';

describe('PostAggregate', () => {
  const author: string = 'author';
  const title: string = 'title';
  const content: string = 'content';

  it('should create a blog post', () => {
    const post: PostAggregate = PostAggregate.with(author, title, content);

    expect(post.getAuthor()).toEqual(author);
    expect(post.getTitle()).toEqual(title);
    expect(post.getContent()).toEqual(content);
    expect(post.getComments()).toEqual([]);
  });

  it('should add a post created event', () => {
    const post: PostAggregate = PostAggregate.with(author, title, content);

    expect(post.getUncommittedChanges()).toContainEqual(new PostCreated(post.getId(), author, title, content));
  });

  it('should add a comment', () => {
    const post: PostAggregate = PostAggregate.with(author, title, content);
    const comment: Comment = new Comment('otherAuthor', 'text');

    post.add(comment);

    expect(post.getComments()).toContainEqual(comment);
  });

  it('should add a comment added event', () => {
    const post: PostAggregate = PostAggregate.with(author, title, content);
    const comment: Comment = new Comment('otherAuthor', 'text');

    post.add(comment);

    expect(post.getUncommittedChanges()).toContainEqual(new CommentAdded(post.getId(), comment));
  });

  it('should rebuild the aggregate from events', () => {
    const postId: string = uuid();
    const events: PostEvent[] = [ new PostCreated(postId, author, title, content) ];

    const post: PostAggregate = PostAggregate.rebuild(events);

    expect(post.getId()).toEqual(postId);
    expect(post.getAuthor()).toEqual(author);
    expect(post.getTitle()).toEqual(title);
    expect(post.getContent()).toEqual(content);
    expect(post.getComments()).toEqual([]);
  });
});
