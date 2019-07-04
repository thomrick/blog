import { CommentAggregate } from '../aggregates';
import { CommentEvent } from './comment.event';

export class CommentCreated implements CommentEvent {
  public readonly id: string;
  public readonly author: string;
  public readonly post: string;
  public readonly text: string;

  constructor(id: string, author: string, post: string, text: string) {
    this.id = id;
    this.author = author;
    this.post = post;
    this.text = text;
  }

  public apply(comment: CommentAggregate): CommentAggregate {
    return comment.apply(this);
  }
}
