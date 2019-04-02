import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1MainComponent } from './page1-main.component';

describe('Page1MainComponent', () => {
  let component: Page1MainComponent;
  let fixture: ComponentFixture<Page1MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
