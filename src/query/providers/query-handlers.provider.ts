import { Provider } from '@nestjs/common';
import { QueryHandler } from '../handlers';
import { USER_QUERY_HANDLERS_TOKEN } from './user-query-handlers.provider';

export const QUERY_HANDLERS_TOKEN: string = 'QueryHandlers';

export const QueryHandlers: Provider = {
  provide: QUERY_HANDLERS_TOKEN,
  useFactory: (userQueryHandlers: QueryHandler[]): QueryHandler[] => {
    return [
      ...userQueryHandlers,
    ];
  },
  inject: [
    USER_QUERY_HANDLERS_TOKEN,
  ],
};
