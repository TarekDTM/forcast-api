import { Module } from '@nestjs/common';
import { WeatherModule } from './weather/Weather.module';
import { MongooseModule } from '@nestjs/mongoose';


// @Module({
//   imports:[WeatherModule,
//      MongooseModule.forRoot(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.fhbsp.mongodb.net/Users?retryWrites=true&w=majority`)]
// })
@Module({
  imports:[ WeatherModule ]
})
export class AppModule {}
