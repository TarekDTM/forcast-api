/* eslint-disable prettier/prettier */
import { HttpService, Injectable } from '@nestjs/common';
import {WeatherData} from './IweatherData'

@Injectable()
export class WeatherService {
  constructor(
    private httpService: HttpService,) {}
    async getWeather(query):Promise<any>{
      try{
        const response = await 
        this.httpService
        .get("https://community-open-weather-map.p.rapidapi.com/onecall/timemachine", {
          headers:{
                'x-rapidapi-key': process.env.ACCESS_TOKEN_KEY,
                useQueryString:true,
          },
          params:{
              lat:query.lat,
              lon:query.lon,
              dt:query.dt
          }     
      }).toPromise()
      const data : WeatherData = response.data;
        return data;
      } catch(error){
          console.log('something went wrong')
      }
      }
}
