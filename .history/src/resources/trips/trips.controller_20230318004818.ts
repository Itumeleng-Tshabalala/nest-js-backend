import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TripsService } from './trips.service';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { Trip } from './schema/trips.schema';

@Controller('trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @Post()
  async create(@Body() createTripDto: CreateTripDto) {
    try {
      return this.tripsService.create(createTripDto);
    } catch (error: any) {
        console.error("request failed", error);
        return error;
    }
  }

  @Get()
  async getAll() {
    try {
        const trips = await this.tripsService.findAll();
        return trips;
    } catch (error: any) {
        console.error("request failed", error);
        return error;
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tripsService.findOneById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTripDto: UpdateTripDto) {
    return this.tripsService.updateById(id, updateTripDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tripsService.removeById(id);
  }
}
