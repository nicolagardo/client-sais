export type TIPO = 'EGRESO' | 'INGRESO';

export interface Movimiento {
  tipo: TIPO | string | undefined | null;
  description: string;
  category: string;
  amount: number;
  date: Date;
}
