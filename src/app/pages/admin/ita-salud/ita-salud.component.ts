import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModalMovimientosComponent } from '../components/modal-movimientos/modal-movimientos.component';
import { FormBuilder } from '@angular/forms';
import { Movimiento, TIPO } from 'src/app/interfaces/formMovimientos';
import { DataService } from 'src/app/services/data.service';

const hoy = Date.now();

const CATEGORIES: Array<string> = ['farmacia', 'alquiler', 'otros'];
const ELEMENT_DATA_MOVEMENTS: Movimiento[] = [
  {
    tipo: 'EGRESO',
    description: 'fotocopias',
    category: 'farmacia',
    amount: 100,
    date: new Date('2023/12/01'),
  },
  {
    tipo: 'INGRESO',
    description: 'fotocopias',
    category: 'farmacia',
    amount: 100,
    date: new Date('2023/12/01'),
  },
  {
    tipo: 'EGRESO',
    description: 'fotocopias',
    category: 'farmacia',
    amount: 100,
    date: new Date('2023/12/01'),
  },
  {
    tipo: 'EGRESO',
    description: 'fotocopias',
    category: 'farmacia',
    amount: 100,
    date: new Date('2023/12/12'),
  },
  {
    tipo: 'EGRESO',
    description: 'fotocopias',
    category: 'farmacia',
    amount: 100,
    date: Date.now(),
  },
];

@Component({
  selector: 'app-ita-salud',
  templateUrl: './ita-salud.component.html',
  styleUrls: ['./ita-salud.component.scss'],
})
export class ItaSaludComponent implements OnInit, OnDestroy {
  selected!: Movimiento;
  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private readonly dataSvc: DataService
  ) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.dataSvc.selectedRow$.subscribe((row) => (this.selected = row));
    console.log('selected ->', this.selected);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('en el changes');

    if (changes['selected'].currentValue != changes['selected'].previousValue) {
      this.addData();
      console.log('En el onChanges en el if');
    }
  }

  displayedColumns: string[] = [
    'tipo',
    'description',
    'category',
    'amount',
    'date',
    'actions',
  ];
  dataToDisplay = [...ELEMENT_DATA_MOVEMENTS];
  // @ViewChild(MatTable) table!: MatTable<Movimiento>;

  dataSource = new ExampleDataSource(this.dataToDisplay);
  onOpenModal(movimiento = {}): void {
    console.log('movimiento ->', movimiento);

    const dialogRef = this.dialog.open(ModalMovimientosComponent, {
      data: { title: 'Formulario', movimiento },
    });
    console.log('dialogRef->', dialogRef.componentInstance.data.movimiento);
    console.log('data->', movimiento);
  }
  addData() {
    this.dataToDisplay = [...this.dataToDisplay, this.selected];
    this.dataSource.setData(this.dataToDisplay);
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }

  // onRowSelected(mov: Movimiento) {
  //   this.dataSvc.setRow(mov);
  // }
}

class ExampleDataSource extends DataSource<Movimiento> {
  private _dataStream = new ReplaySubject<Movimiento[]>();

  constructor(initialData: Movimiento[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<Movimiento[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: Movimiento[]) {
    this._dataStream.next(data);
  }
}
