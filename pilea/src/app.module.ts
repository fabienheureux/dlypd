import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlantsController } from './plants/plants.controller';

@Module({
  imports: [],
  controllers: [AppController, PlantsController],
  providers: [AppService],
})
export class AppModule {}
