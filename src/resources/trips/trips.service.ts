import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service } from 'src/api/api';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { Trip, TripDocument } from './schema/trips.schema';

@Injectable()
export class TripsService extends Service<TripDocument> {

  constructor(
    @InjectModel(Trip.name) private TripModel: Model<TripDocument>
    ) {
    super(TripModel)
  }

  async create(createTripDto: CreateTripDto) : Promise<Trip>  {
    try {
      const trip: Trip = await this.insert(createTripDto);
      console.error("TripsService.create.response", trip);
      return trip;
    } catch (error: any) {
      console.error("TripsService.create", error);
      return error;
    }
  }

  async findAll() : Promise<Trip[]>  {
    try {
      const trips: Trip[] = await this.getAll();
      return trips;
    } catch (error: any) {
        console.error("TripsService.findAll", error);
        return error;
    }
  }
  
  async findOneById(id: string) : Promise<Trip> {
    try {
      const trip: Trip = await this.getOneById(id);
      console.debug('TripsService.findOneById.trip', trip)
      return trip;
    } catch (error: any) {
        console.error("TripsService.findAll.error", error);
        return error;
    }
  }

  async update(id: string, updateTripDto: UpdateTripDto) {
    try {
      const trip = await this.updateById(id, updateTripDto);
      console.debug('TripsService.update.trip', trip)
      return trip;
    } catch (error: any) {
        console.error("TripsService.update.error", error);
        return error;
    }
  }

  async remove(id: string) {
    try {
      const trip = await this.removeById(id);
      console.debug('TripsService.remove.trip', trip)
      return trip;
    } catch (error: any) {
        console.error("TripsService.remove.error", error);
        return error;
    }
  }
}
