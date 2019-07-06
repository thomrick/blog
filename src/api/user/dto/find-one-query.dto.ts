// tslint:disable:max-classes-per-file
export class FindOneQueryDto {
  public readonly email?: string;
  public readonly username?: string;

  constructor(email?: string, username?: string) {
    this.email = email;
    this.username = username;
  }

  public static Builder() {
    return new class FindOneQueryDtoBuilder {
      private email?: string;
      private username?: string;

      public withEmail(email: string): FindOneQueryDtoBuilder {
        this.email = email;
        return this;
      }

      public withUsername(username: string): FindOneQueryDtoBuilder {
        this.username = username;
        return this;
      }

      public build(): FindOneQueryDto {
        return new FindOneQueryDto(this.email, this.username);
      }
    }();
  }
}
