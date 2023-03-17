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
      return await this.getAll();
    } catch (error: any) {
        console.error("UsersService.findAll", error);
        return error;
    }
  }

  async findOneByEmail(email: string) : Promise<Trip> {
    try {
      const trip: Trip = await this.getOneByEmail(email);
      console.debug('UsersService.findAll.trip', trip)
      return trip;
    } catch (error: any) {
        console.error("UsersService.findAll.error", error);
        return error;
    }
  }
  
  async findOneById(id: string) : Promise<Trip> {
    try {
      const trip: Trip = await this.getOneById(id);
      console.debug('UsersService.findAll.trip', trip)
      return trip;
    } catch (error: any) {
        console.error("UsersService.findAll.error", error);
        return error;
    }
  }

  async update(email: string, updateTripDto: UpdateTripDto) {
    try {
      const trip = await this.updateByEmail(email, updateTripDto);
      console.debug('UsersService.update.trip', trip)
      return trip;
    } catch (error: any) {
        console.error("UsersService.update.error", error);
        return error;
    }
  }

  async remove(email: string) {
    try {
      const trip = await this.removeByEmail(email);
      console.debug('UsersService.remove.trip', trip)
      return trip;
    } catch (error: any) {
        console.error("UsersService.remove.error", error);
        return error;
    }
  }
}
