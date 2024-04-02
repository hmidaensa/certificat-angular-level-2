import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICity } from '../../shared/module/icity';
import { SharedService } from '../../shared/service/shared.service';
import { ICurrentWeather } from '../../shared/module/icurrent-weather';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  currentWeather:ICity[]=[];
  currentWeathers:ICurrentWeather[]=[];
  totalItems = 0;
  isLoading = true;
 
constructor(private sharedService:SharedService){
  
}

  ngOnInit(): void {
  
    this.currentWeather=this.sharedService.getLocationSaved();
    this.getAllCurrentWeather(this.currentWeather);
  }

  refreshListWeader(event:any){
    this.currentWeather=event;
    this.getAllCurrentWeather(this.currentWeather);
    
  }

  private getAllCurrentWeather(locations:any):void{
    this.currentWeathers=this.sharedService.getAllCurrentWeather(locations);

    this.isLoading = false;
    debugger
    this.totalItems =  this.currentWeathers.length;
    console.log(this.totalItems)
  }

}
