import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Posiciones extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  latitud?: string;

  @property({
    type: 'string',
    required: true,
  })
  longitud: string;

  @property({
    type: 'string',
    required: true,
  })
  altitud: string;
  
  constructor(data?: Partial<Posiciones>) {
    super(data);
  }
}

export interface PosicionesRelations {
  // describe navigational properties here
}

export type PosicionesWithRelations = Posiciones & PosicionesRelations;