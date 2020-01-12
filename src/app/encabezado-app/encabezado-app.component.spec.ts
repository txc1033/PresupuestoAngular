import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoAppComponent } from './encabezado-app.component';

describe('EncabezadoAppComponent', () => {
  let component: EncabezadoAppComponent;
  let fixture: ComponentFixture<EncabezadoAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncabezadoAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncabezadoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
