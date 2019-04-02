import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactWithAsComponent } from './contact-with-as.component';

describe('ContactWithAsComponent', () => {
  let component: ContactWithAsComponent;
  let fixture: ComponentFixture<ContactWithAsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactWithAsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactWithAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
