import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomNewsComponent } from './random-news.component';

describe('RandomNewsComponent', () => {
  let component: RandomNewsComponent;
  let fixture: ComponentFixture<RandomNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
