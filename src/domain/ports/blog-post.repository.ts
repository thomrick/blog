import { BlogPost } from '../blog-post';

export interface BlogPostRepository {
  save(post: BlogPost): void;
  get(id: string): BlogPost;
}
