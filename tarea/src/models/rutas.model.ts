import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Rutas extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  distancia?: string;

  @property({
    type: 'string',
    required: true,
  })
  lugar_inicio: string;

  @property({
    type: 'string',
    required: true,
  })
  lugar_final: string;


  constructor(data?: Partial<Rutas>) {
    super(data);
  }
}

export interface RutasRelations {
  // describe navigational properties here
}

export type RutasWithRelations = Rutas & RutasRelations;