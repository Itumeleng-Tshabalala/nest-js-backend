import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service } from 'src/api/api';
import { TripDocument, Trip } from '../trips/schema/trips.schema';

@Injectable()
export class UserTripsService extends Service<TripDocument> {
  constructor(@InjectModel(Trip.name) private vehicleModal: Model<TripDocument>) {
    super(vehicleModal)
  }

  async findByUserId(userId: string) : Promise<Trip> {
    try {
      const vehicle: Trip = await this.getOneByOptions({userId});
      console.debug('UserTripService.findByUserId.vehicle', vehicle)
      return vehicle;
    } catch (error: any) {
        console.error("UserTripService.findByUserId.error", error);
        return error;
    }
  }

  async findByUserIdAndTripId(userId: string, vehicleId: string) : Promise<Trip> {
    try {
      const vehicle: Trip = await this.getOneByOptions({userId, id: vehicleId});
      console.debug('UserTripService.findByUserIdAndTripId.vehicle', vehicle)
      return vehicle;
    } catch (error: any) {
        console.error("UserTripService.findByUserIdAndTripId.error", error);
        return error;
    }
  }
}
