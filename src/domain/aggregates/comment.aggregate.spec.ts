import uuid from 'uuid/v1';
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
});
