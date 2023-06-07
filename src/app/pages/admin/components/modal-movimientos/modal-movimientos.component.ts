import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movimiento } from 'src/app/interfaces/formMovimientos';
import { DataService } from 'src/app/services/data.service';

const mov: Movimiento = {
  tipo: 'EGRESO',
  description: '',
  category: '',
  amount: 0,
  date: new Date('01/01/2002'),
};
@Component({
  selector: 'app-modal-movimientos',
  templateUrl: './modal-movimientos.component.html',
  styleUrls: ['./modal-movimientos.component.scss'],
})
export class ModalMovimientosComponent implements OnInit {
  // private fila$ = new BehaviorSubject<any>({});

  // get selectedFila$() {
  //   return this.fila$.asObservable();
  // }
  // setFila(data: any) {
  //   this.fila$.next(data);
  // }
  selected? = this.data.movimiento.description;
  selectedRow$ = this.dataSvc.selectedRow$;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly fb: FormBuilder,
    private readonly dataSvc: DataService
  ) {}

  movimientoForm: FormGroup = this.fb.group({
    tipo: this.data ? this.data.movimiento.tipo : [''],
    description: [''],
    category: this.data ? this.data.movimiento.category : [''],
    amount: this.data ? this.data.movimiento.amount : [''],
    date: this.data ? this.data.movimiento.date : [Date.now()],
  });

  onChangeMov(row: Movimiento): void {
    this.dataSvc.setRow(row);
  }
  // aaa = new Movimiento
  onSave(): void {
    const formValue: Movimiento = this.movimientoForm.value;
    console.log('formValue ->', formValue);
    this.dataSvc.setRow(formValue);
  }
  ngOnInit(): void {}
}
