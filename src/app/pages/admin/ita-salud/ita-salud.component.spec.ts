import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItaSaludComponent } from './ita-salud.component';

describe('ItaSaludComponent', () => {
  let component: ItaSaludComponent;
  let fixture: ComponentFixture<ItaSaludComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItaSaludComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItaSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
