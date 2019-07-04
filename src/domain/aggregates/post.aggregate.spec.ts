import uuid from 'uuid/v1';
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
});
