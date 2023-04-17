import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternacionDomiciliariaComponent } from './internacion-domiciliaria.component';

describe('InternacionDomiciliariaComponent', () => {
  let component: InternacionDomiciliariaComponent;
  let fixture: ComponentFixture<InternacionDomiciliariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternacionDomiciliariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternacionDomiciliariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
