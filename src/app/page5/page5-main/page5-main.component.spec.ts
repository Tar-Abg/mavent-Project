import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page5MainComponent } from './page5-main.component';

describe('Page5MainComponent', () => {
  let component: Page5MainComponent;
  let fixture: ComponentFixture<Page5MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page5MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page5MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
