import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2MainComponent } from './page2-main.component';

describe('Page2MainComponent', () => {
  let component: Page2MainComponent;
  let fixture: ComponentFixture<Page2MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page2MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
