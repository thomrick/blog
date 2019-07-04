import { Inject, Injectable } from '@nestjs/common';
import {
  CommentAggregate,
  CommentRepository,
  PostAggregate,
  PostRepository,
  UserAggregate,
  UserRepository,
} from '../../domain';
import { POST_REPOSITORY_TOKEN } from '../posts';
import { USER_REPOSITORY_TOKEN } from '../users';
import { COMMENT_REPOSITORY_TOKEN } from './comments.repository';
import { CreateCommentDto } from './dto';

@Injectable()
export class CommentsService {
  private readonly comments: CommentRepository;
  private readonly posts: PostRepository;
  private readonly users: UserRepository;

  constructor(
    @Inject(COMMENT_REPOSITORY_TOKEN) comments: CommentRepository,
    @Inject(POST_REPOSITORY_TOKEN) posts: PostRepository,
    @Inject(USER_REPOSITORY_TOKEN) users: UserRepository,
  ) {
    this.comments = comments;
    this.posts = posts;
    this.users = users;
  }

  public create(dto: CreateCommentDto): CommentAggregate {
    const author: UserAggregate | null = this.users.get(dto.author);
    if (author === null) {
      throw new Error('Author not found');
    }
    const post: PostAggregate | null = this.posts.get(dto.post);
    if (post === null) {
      throw new Error('Post not found');
    }
    const comment: CommentAggregate = CommentAggregate.with(author, post, dto.text);
    this.comments.save(comment);
    return comment;
  }
}
