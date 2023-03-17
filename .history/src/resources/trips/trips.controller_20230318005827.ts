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
        const trips: Trip[] = await this.tripsService.findAll();
        return trips;
    } catch (error: any) {
        console.error("request failed", error);
        return error;
    }
  }

  @Get(':id') 
  async findOneByEmail(@Param('id') id: string) {
    try {
      const trip: Trip = await this.tripsService.findOneById(id);
      return trip ? trip : { message: `Trip ${id} doesn't exist.` }
    } catch (error: any) {
        console.error("request failed", error);
        return error;
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTripDto: UpdateTripDto) {
    try {
      const trip = await this.tripsService.update(id, updateTripDto);
      return trip ? trip : { message: `Trip ${id} doesn't exist.` }
    } catch (error: any) {
        console.error("request failed", error);
        return error;
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const trip = await this.tripsService.remove(id);
      return trip ? trip : { message: `Trip ${id} doesn't exist.` }
    } catch (error: any) {
        console.error("request failed", error);
        return error;
    }
  }
}
