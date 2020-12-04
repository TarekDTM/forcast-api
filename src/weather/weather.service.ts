/* eslint-disable prettier/prettier */
import { HttpException, HttpService, HttpStatus, Injectable } from '@nestjs/common';
import { response } from 'express';
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
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
      }
      }
}
