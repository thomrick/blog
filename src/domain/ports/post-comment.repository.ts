import { PostComment } from '../post-comment';

export interface PostCommentRepository {
  save(comment: PostComment): void;
  get(id: string): PostComment;
}
