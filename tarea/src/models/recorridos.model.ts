import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Recorridos extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  asignacion?: string;

  //calcularRuta():string;

  constructor(data?: Partial<Recorridos>) {
    super(data);
  }
}

export interface RecorridosRelations {
  // describe navigational properties here
}

export type RecorridosWithRelations = Recorridos & RecorridosRelations;