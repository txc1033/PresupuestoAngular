import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TributarioAppComponent } from './tributario-app.component';

describe('TributarioAppComponent', () => {
  let component: TributarioAppComponent;
  let fixture: ComponentFixture<TributarioAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TributarioAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TributarioAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
