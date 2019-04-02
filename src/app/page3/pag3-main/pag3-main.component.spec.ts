import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pag3MainComponent } from './pag3-main.component';

describe('Pag3MainComponent', () => {
  let component: Pag3MainComponent;
  let fixture: ComponentFixture<Pag3MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pag3MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pag3MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
