/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly appService: WeatherService) {}
  @Get()
  getWeather(@Query() query):any{
    
    return this.appService.getWeather(query);
  }
}



// localhost:3000/weather?date=3-10-2010