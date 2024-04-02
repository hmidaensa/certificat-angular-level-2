import { Pipe, PipeTransform } from '@angular/core';
import { WeatherCondition } from './weather-condition';

@Pipe({
  name: 'weatherImg'
})
export class WeatherImgPipe implements PipeTransform {

  transform(value: WeatherCondition): any {

    let url = "https://www.angulartraining.com/images/weather/";

    switch (value) {
      case WeatherCondition.Clouds:
        url += 'clouds.png';
        break;
      case WeatherCondition.Rain:
        url += 'rain.png';
        break;
      case WeatherCondition.Snow:
        url += 'snow.png';
        break;
      case WeatherCondition.Sun:
        url += 'sun.png';
        break;
      default:
        url += 'clouds.png';

       
    }
    return url
  }

}
