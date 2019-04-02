import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FasatniSistemiComponent } from './fasatni-sistemi.component';

describe('FasatniSistemiComponent', () => {
  let component: FasatniSistemiComponent;
  let fixture: ComponentFixture<FasatniSistemiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FasatniSistemiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FasatniSistemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
