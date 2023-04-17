import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreocupacionalesComponent } from './preocupacionales.component';

describe('PreocupacionalesComponent', () => {
  let component: PreocupacionalesComponent;
  let fixture: ComponentFixture<PreocupacionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreocupacionalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreocupacionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
