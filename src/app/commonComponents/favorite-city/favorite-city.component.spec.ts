import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCityComponent } from './favorite-city.component';

describe('FavoriteCityComponent', () => {
  let component: FavoriteCityComponent;
  let fixture: ComponentFixture<FavoriteCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
