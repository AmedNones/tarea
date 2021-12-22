import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Licencias extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  liviana?: string;

  @property({
    type: 'string',
    required: true,
  })
  pesada: string;
  
  constructor(data?: Partial<Licencias>) {
    super(data);
  }
}

export interface LicenciasRelations {
  // describe navigational properties here
}

export type LicenciasWithRelations = Licencias & LicenciasRelations;