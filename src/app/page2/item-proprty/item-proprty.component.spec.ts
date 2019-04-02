import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProprtyComponent } from './item-proprty.component';

describe('ItemProprtyComponent', () => {
  let component: ItemProprtyComponent;
  let fixture: ComponentFixture<ItemProprtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemProprtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemProprtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
