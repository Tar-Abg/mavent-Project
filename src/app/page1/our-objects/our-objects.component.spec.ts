import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurObjectsComponent } from './our-objects.component';

describe('OurObjectsComponent', () => {
  let component: OurObjectsComponent;
  let fixture: ComponentFixture<OurObjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurObjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
