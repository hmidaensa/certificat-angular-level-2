import { Component, Input } from '@angular/core';
import { ICurrentWeather } from '../../shared/module/icurrent-weather';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.css'
})
export class CurrentWeatherComponent  {

  @Input()  currentWeathers:ICurrentWeather[]=[];

  constructor(private router:ActivatedRoute,private route:Router){
    
  }

  displayForcast(zip:string){

    //this.route.navigate(['/home/forecast/',zip],{relativeTo:this.router})

    this.route.navigate(['/forecast/',zip])
   
  }
 

}
