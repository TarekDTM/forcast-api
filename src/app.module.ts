import { Module } from '@nestjs/common';
import { WeatherModule } from './weather/Weather.module';
// import { MongooseModule } from '@nestjs/mongoose';


// @Module({
//   imports:[WeatherModule,
//      MongooseModule.forRoot(`mongodb+srv://tarek90045:anrky90045@cluster0.fhbsp.mongodb.net/Users?retryWrites=true&w=majority`)]
// })
@Module({
  imports:[ WeatherModule ]
})
export class AppModule {}
