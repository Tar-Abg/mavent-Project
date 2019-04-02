import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SistmeMaventComponent } from './sistme-mavent.component';

describe('SistmeMaventComponent', () => {
  let component: SistmeMaventComponent;
  let fixture: ComponentFixture<SistmeMaventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistmeMaventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistmeMaventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
