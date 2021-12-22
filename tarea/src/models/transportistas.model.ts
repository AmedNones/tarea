import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Transportistas extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  identidad?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  licencia: string;

  constructor(data?: Partial<Transportistas>) {
    super(data);
  }
}

export interface TransportistasRelations {
  // describe navigational properties here
}

export type TransportistasWithRelations = Transportistas & TransportistasRelations;