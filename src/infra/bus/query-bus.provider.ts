import { Provider } from '@nestjs/common';
import { QUERY_HANDLERS_TOKEN, QueryHandler } from '../../query';
import { InMemoryQueryBus } from './in-memory';
import { QueryBus } from './query-bus';

export const QUERY_BUS_TOKEN: string = 'QueryBus';

export const QueryBusProvider: Provider = {
  provide: QUERY_BUS_TOKEN,
  useFactory: (handlers: QueryHandler[]): QueryBus => {
    return new InMemoryQueryBus(handlers);
  },
  inject: [
    QUERY_HANDLERS_TOKEN,
  ],
};
