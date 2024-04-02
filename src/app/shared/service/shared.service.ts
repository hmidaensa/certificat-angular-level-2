import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICity } from '../module/icity';
import { ICurrentWeather } from '../module/icurrent-weather';
import { IForcast5Weather } from '../module/iforcast5-weather';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

   API:string="5a4b2d457ecbef9eb2a71e480b947604";

  constructor(private http: HttpClient) { }


  getLocationInfoByZip(zip: string): Observable<ICity> {

    return this.http.get<ICity>("http://api.openweathermap.org/geo/1.0/zip?zip=" + zip + ",US&appid="+this.API);

  }


  getLocationSaved(): ICity[] {

    let locationStored: ICity[] = JSON.parse(localStorage!.getItem("localStored")!);
    if (locationStored === null) {
      locationStored = [];
    }
    return locationStored;

  }


getCurrentWeather(location:ICity):Observable<ICurrentWeather>{
    return this.http.get<ICurrentWeather>("https://api.openweathermap.org/data/2.5/weather?lat="+location.lat+"&lon="+location.lon+"&appid="+this.API)
}
 
getAllCurrentWeather(locations:ICity[]):ICurrentWeather[]{

  let allCurrentWeather:ICurrentWeather[]=[];
  //var newLocationToStored=[...locationStored,location]
  locations.forEach( location =>{
    this.http.get<ICurrentWeather>("https://api.openweathermap.org/data/2.5/weather?lat="+location.lat+"&lon="+location.lon+"&appid="+this.API).subscribe( item =>{
    let result:ICurrentWeather;
    result=item;
    result.location=location;
    allCurrentWeather.push(result);
    });
  })

  return allCurrentWeather
}


getForcast5Weather(zip:string):Observable<IForcast5Weather>{
  const options = {
    params: new HttpParams().set('zip', zip + ',us').set('cnt', 5),
    };
 return this.http.get<IForcast5Weather>("https://api.openweathermap.org/data/2.5/forecast?zip="+zip+",US&appid="+this.API);
}






}
