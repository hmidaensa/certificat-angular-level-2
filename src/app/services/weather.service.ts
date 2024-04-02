import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICity } from '../shared/module/icity';
import { SharedService } from '../shared/service/shared.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private sharedService: SharedService) { }


  laodLocationIfExiste(zip: string): Observable<ICity> {
    return this.sharedService.getLocationInfoByZip(zip);
  }



  addLocationToLocalStoarge(location: ICity): number | ICity[] {

    let locationStored = this.sharedService.getLocationSaved();

    let checkIfLocalAdded= locationStored.filter(item => item.zip === location.zip).length;
    if (checkIfLocalAdded > 0) {
      return -1;
    }
    else {
       var newLocationToStored=[...locationStored,location]
      localStorage.setItem("localStored", JSON.stringify(newLocationToStored));
      locationStored = this.sharedService.getLocationSaved();
      return locationStored;
    }


  }

}


