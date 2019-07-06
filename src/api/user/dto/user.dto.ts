import { UserAggregate } from '../../../domain';

export class UserDto {

  public readonly id: string;
  public readonly username: string;

  private constructor(id: string, username: string) {
    this.id = id;
    this.username = username;
  }

  public static from(user: UserAggregate): UserDto {
    return new UserDto(user.getId(), user.getUsername());
  }
}
