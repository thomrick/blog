import { Post } from './post';

describe('Post', () => {
  it('should create a new post', () => {
    const title: string = 'title';
    const content: string = 'content';

    const post: Post = Post.create(title, content);

    expect(post.getTitle()).toEqual(title);
    expect(post.getContent()).toEqual(content);
  })
});