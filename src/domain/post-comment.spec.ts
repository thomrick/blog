import { BlogPost } from './blog-post';
import { PostComment } from './post-comment';
import { User } from './user';

describe('PostComment', () => {
  it('should create a new comment', () => {
    const author: User = User.with('username');
    const post: BlogPost = BlogPost.with(author, 'title', 'content');
    const text: string = 'text';

    const comment: PostComment = PostComment.with(author, post, text);

    expect(comment.getAuthor()).toEqual(author);
    expect(comment.getPost()).toEqual(post);
    expect(comment.getText()).toEqual(text);
  });
});
