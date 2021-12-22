import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Recorridos, RecorridosRelations} from '../models';

export class RecorridosRepository extends DefaultCrudRepository<
  Recorridos,
  typeof Recorridos.prototype.asignacion,
  RecorridosRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Recorridos, dataSource);
  }
}
