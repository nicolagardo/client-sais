import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import { MatTable } from '@angular/material/table';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
export interface Movimiento {
  tipo: string;
  description: string;
  category: string;
  amount: number;
  date: Date;
}

const CATEGORIES: Array<string> = ['farmacia', 'alquiler', 'otros'];
const ELEMENT_DATA_MOVEMENTS: Movimiento[] = [
  {
    tipo: 'INGRESO',
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
    tipo: 'INGRESO',
    description: 'fotocopias',
    category: 'farmacia',
    amount: 100,
    date: new Date('2023/12/01'),
  },
];

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-ita-salud',
  templateUrl: './ita-salud.component.html',
  styleUrls: ['./ita-salud.component.scss'],
})
export class ItaSaludComponent implements OnInit {
  constructor() {}

  displayedColumns: string[] = [
    'tipo',
    'description',
    'category',
    'amount',
    'date',
    'actions',
  ];
  dataToDisplay = [...ELEMENT_DATA_MOVEMENTS];
  @ViewChild(MatTable) table: MatTable<Movimiento> | undefined;

  dataSource = new ExampleDataSource(this.dataToDisplay);

  addData() {
    const randomElementIndex = Math.floor(
      Math.random() * ELEMENT_DATA_MOVEMENTS.length
    );
    this.dataToDisplay = [
      ...this.dataToDisplay,
      ELEMENT_DATA_MOVEMENTS[randomElementIndex],
    ];
    this.dataSource.setData(this.dataToDisplay);
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }

  ngOnInit(): void {}
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
