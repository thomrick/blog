import { Provider } from '@nestjs/common';
import { QueryBus } from '../../../infra';
import { QueryHandler } from '../../../query';
import { QUERY_HANDLERS_TOKEN } from '../query';

export const QUERY_BUS_TOKEN: string = 'QueryBus';

export const QueryBusProvider: Provider = {
  provide: QUERY_BUS_TOKEN,
  useFactory: (handlers: QueryHandler[]): QueryBus => {
    return new QueryBus(handlers);
  },
  inject: [
    QUERY_HANDLERS_TOKEN,
  ],
};
