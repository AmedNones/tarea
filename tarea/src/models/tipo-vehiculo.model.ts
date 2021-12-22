import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class TipoVehiculo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  pickup?: string;

  @property({
    type: 'string',
    required: true,
  })
  camion: string;

  constructor(data?: Partial<TipoVehiculo>) {
    super(data);
  }
}

export interface TipoVehiculoRelations {
  // describe navigational properties here
}

export type TipoVehiculoWithRelations = TipoVehiculo & TipoVehiculoRelations;