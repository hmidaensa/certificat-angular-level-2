import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forecast5WeatherComponent } from './forecast5-weather.component';

describe('Forecast5WeatherComponent', () => {
  let component: Forecast5WeatherComponent;
  let fixture: ComponentFixture<Forecast5WeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Forecast5WeatherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Forecast5WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
