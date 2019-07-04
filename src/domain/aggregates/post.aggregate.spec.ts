import { PostAggregate } from './post.aggregate';
import { UserAggregate } from './user.aggregate';

describe('PostAggregate', () => {
  it('should create a blog post', () => {
    const author: UserAggregate = UserAggregate.with('username');
    const title: string = 'title';
    const content: string = 'content';

    const post: PostAggregate = PostAggregate.with(author, title, content);

    expect(post.getAuthor()).toEqual(author);
    expect(post.getTitle()).toEqual(title);
    expect(post.getContent()).toEqual(content);
  });
});
