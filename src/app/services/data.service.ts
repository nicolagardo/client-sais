import { Injectable } from '@angular/core';
import { Movimiento } from '../interfaces/formMovimientos';
import { BehaviorSubject, Observable } from 'rxjs';
const initFila: Movimiento = {
  tipo: '',
  description: '',
  category: '',
  amount: 0,
  date: new Date('01/01/2023'),
};
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private fila$ = new BehaviorSubject<Movimiento>(initFila);
  constructor() {}

  get selectedRow$(): Observable<Movimiento> {
    return this.fila$.asObservable();
  }
  setRow(row: Movimiento): void {
    this.fila$.next(row);
  }
  // addDataSvc(row:Movimiento):object{
  //   return row.
  // }
}
