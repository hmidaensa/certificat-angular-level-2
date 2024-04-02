import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../shared/service/shared.service';
import { IForcast5Weather } from '../../shared/module/iforcast5-weather';

@Component({
  selector: 'app-forecast5-weather',
  templateUrl: './forecast5-weather.component.html',
  styleUrl: './forecast5-weather.component.css'
})
export class Forecast5WeatherComponent implements OnInit {
   forcast5weather:IForcast5Weather | undefined;
   zip:string="";

  constructor(private sharedService:SharedService,private router:ActivatedRoute){

   // this.route.navigate(['/forecast/',this.router.snapshot.params['zip']],{relativeTo:this.router})
  }
  ngOnInit(): void {
    this.zip=this.router.snapshot.params['zipcode'];

    this.sharedService.getForcast5Weather(this.zip).subscribe( forcastData =>{
      this.forcast5weather=forcastData;

      
    })
  
  }

}
