import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Transportistas, TransportistasRelations} from '../models';

export class TransportistasRepository extends DefaultCrudRepository<
  Transportistas,
  typeof Transportistas.prototype.identidad,
  TransportistasRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Transportistas, dataSource);
  }
}
