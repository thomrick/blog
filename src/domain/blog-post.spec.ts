import { BlogPost } from './blog-post';
import { User } from './user';

describe('BlogPost', () => {
  it('should create a blog post', () => {
    const author: User = User.with('username');
    const title: string = 'title';
    const content: string = 'content';

    const post: BlogPost = BlogPost.with(author, title, content);

    expect(post.getAuthor()).toEqual(author);
    expect(post.getTitle()).toEqual(title);
    expect(post.getContent()).toEqual(content);
  });
});
