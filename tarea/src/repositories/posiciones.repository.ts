import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Posiciones, PosicionesRelations} from '../models';

export class PosicionesRepository extends DefaultCrudRepository<
  Posiciones,
  typeof Posiciones.prototype.latitud,
  PosicionesRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Posiciones, dataSource);
  }
}
