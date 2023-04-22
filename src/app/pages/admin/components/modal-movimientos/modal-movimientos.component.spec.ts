import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMovimientosComponent } from './modal-movimientos.component';

describe('ModalMovimientosComponent', () => {
  let component: ModalMovimientosComponent;
  let fixture: ComponentFixture<ModalMovimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMovimientosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalMovimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
