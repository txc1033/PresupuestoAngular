import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresoAppComponent } from './egreso-app.component';

describe('EgresoAppComponent', () => {
  let component: EgresoAppComponent;
  let fixture: ComponentFixture<EgresoAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgresoAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgresoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
