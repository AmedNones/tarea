import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Licencias, LicenciasRelations} from '../models';

export class LicenciasRepository extends DefaultCrudRepository<
  Licencias,
  typeof Licencias.prototype.liviana,
  LicenciasRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Licencias, dataSource);
  }
}
