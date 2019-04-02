import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page4MainComponent } from './page4-main.component';

describe('Page4MainComponent', () => {
  let component: Page4MainComponent;
  let fixture: ComponentFixture<Page4MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page4MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page4MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
