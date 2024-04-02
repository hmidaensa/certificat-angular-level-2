import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { WeatherImgPipe } from './pipe/weather-img.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';
import { ChangeColorDirective } from './directive/change-color.directive';
 

@NgModule({
  declarations: [
    WeatherImgPipe,
    ChangeColorDirective
   ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers:[
    
  ],
  exports:[
    WeatherImgPipe,
    CommonModule,
    SharedRoutingModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ChangeColorDirective
  ]
})
export class SharedModule { }
