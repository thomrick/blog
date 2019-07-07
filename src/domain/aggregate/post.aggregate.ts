import uuid from 'uuid/v1';
import { CommentAdded, PostCreated, PostEvent } from '../event';
import { Comment } from '../model';
import { PostProjection } from '../projection';

interface DataConstructorParams {
  readonly postId: string;
  readonly author: string;
  readonly title: string;
  readonly content: string;
}

type ConstructorParams = DataConstructorParams | PostProjection | PostEvent[];

export class PostAggregate {
  private projection!: PostProjection;
  private changes: PostEvent[] = [];

  constructor(params?: ConstructorParams) {
    if (!!params && params instanceof PostProjection) {
      this.projection = params;
    } else if (!!params && params instanceof Array) {
      this.projection = params.reduce((projection, event) => event.apply(projection), new PostProjection());
    } else {
      const data: DataConstructorParams = params as DataConstructorParams;
      this.projection = new PostProjection();
      const event = new PostCreated(data.postId, data.author, data.title, data.content);
      this.apply(event);
      this.save(event);
    }
  }

  public static with(author: string, title: string, content: string): PostAggregate {
    return new PostAggregate({ postId: uuid(), author, title, content });
  }

  public add(comment: Comment): void {
    const event = new CommentAdded(this.projection.getId(), comment);
    this.apply(event);
    this.save(event);
  }

  public getProjection(): PostProjection {
    return this.projection;
  }

  public apply(event: PostEvent): void {
    this.projection.state().apply(event);
  }

  private save(event: PostEvent): void {
    this.changes.push(event);
  }

  public getUncommittedChanges(): PostEvent[] {
    return this.changes;
  }
}
