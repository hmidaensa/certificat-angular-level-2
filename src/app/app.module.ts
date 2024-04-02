import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddZipComponent } from './components/add-zip/add-zip.component';
import { HomeComponent } from './components/home/home.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { SharedModule } from './shared/shared.module';
import { Forecast5WeatherComponent } from './components/forecast5-weather/forecast5-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    AddZipComponent,
    HomeComponent,
    CurrentWeatherComponent,
    Forecast5WeatherComponent
    ],
  imports: [
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  /*schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]*/
})
export class AppModule { }
