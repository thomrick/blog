import uuid from 'uuid/v1';
import { CommentCreated, CommentEvent } from '../events';
import { CommentAggregate } from './comment.aggregate';

describe('CommentAggregate', () => {
  it('should create a new comment', () => {
    const author: string = uuid();
    const post: string = uuid();
    const text: string = 'text';

    const comment: CommentAggregate = CommentAggregate.with(author, post, text);

    expect(comment.getAuthor()).toEqual(author);
    expect(comment.getPost()).toEqual(post);
    expect(comment.getText()).toEqual(text);
  });

  it('should add a comment created event', () => {
    const author: string = uuid();
    const post: string = uuid();
    const text: string = 'text';

    const comment: CommentAggregate = CommentAggregate.with(author, post, text);

    expect(comment.getUncommittedChanges()).toContainEqual(
      new CommentCreated(comment.getId(), comment.getAuthor(), comment.getPost(), comment.getText(),
    ));
  });

  it('should rebuild aggregate from events', () => {
    const id: string = uuid();
    const author: string = uuid();
    const post: string = uuid();
    const text: string = 'text';
    const events: CommentEvent[] = [ new CommentCreated(id, author, post, text) ];

    const comment: CommentAggregate = CommentAggregate.rebuild(events);
  });
});
