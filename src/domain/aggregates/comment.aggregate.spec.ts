import { CommentAggregate } from './comment.aggregate';
import { PostAggregate } from './post.aggregate';
import { UserAggregate } from './user.aggregate';

describe('CommentAggregate', () => {
  it('should create a new comment', () => {
    const author: UserAggregate = UserAggregate.with('username');
    const post: PostAggregate = PostAggregate.with(author, 'title', 'content');
    const text: string = 'text';

    const comment: CommentAggregate = CommentAggregate.with(author, post, text);

    expect(comment.getAuthor()).toEqual(author);
    expect(comment.getPost()).toEqual(post);
    expect(comment.getText()).toEqual(text);
  });
});
