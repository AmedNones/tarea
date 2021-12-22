import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Rutas, RutasRelations} from '../models';

export class RutasRepository extends DefaultCrudRepository<
  Rutas,
  typeof Rutas.prototype.distancia,
  RutasRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Rutas, dataSource);
  }
}
