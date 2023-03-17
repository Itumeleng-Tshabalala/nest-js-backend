import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service } from 'src/api/api';
import { Vehicle, VehicleDocument } from '../vehicle/schema/vehicle.schema';
import { CreateUserVehicleDto } from './dto/create-user-vehicle.dto';
import { UpdateUserVehicleDto } from './dto/update-user-vehicle.dto';

@Injectable()
export class UserVehicleService extends Service<VehicleDocument> {

  constructor(@InjectModel(Vehicle.name) private vehicleModal: Model<VehicleDocument>) {
    super(vehicleModal)
  }

  async findByUserId(userId: string) : Promise<Vehicle> {
    try {
      const vehicle: Vehicle = await this.getOneByOptions({userId});
      console.debug('UserVehicleService.findByUserId.vehicle', vehicle)
      return vehicle;
    } catch (error: any) {
        console.error("UserVehicleService.findByUserId.error", error);
        return error;
    }
  }

  async findByUserIdAndVehicleId(userId: string, vehicleId: string) : Promise<Vehicle> {
    try {
      const vehicle: Vehicle = await this.getOneByOptions({userId, id: vehicleId});
      console.debug('UserVehicleService.findByUserIdAndVehicleId.vehicle', vehicle)
      return vehicle;
    } catch (error: any) {
        console.error("UserVehicleService.findByUserIdAndVehicleId.error", error);
        return error;
    }
  }
  
}
