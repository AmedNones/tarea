import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'mongodb',
  url: 'mongodb+srv://amednones:loscapos123@cluster0.eyukb.mongodb.net/Prueba?retryWrites=true&w=majority',
  host: 'localhost',
  port: 27017,
  user: 'amednones',
  password: '123',
  database: 'Prueba',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DsourceDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'dsource';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.dsource', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
