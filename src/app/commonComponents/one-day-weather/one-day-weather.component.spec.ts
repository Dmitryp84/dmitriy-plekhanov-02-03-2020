import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDayWeatherComponent } from './one-day-weather.component';

describe('OneDayWeatherComponent', () => {
  let component: OneDayWeatherComponent;
  let fixture: ComponentFixture<OneDayWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneDayWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneDayWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
