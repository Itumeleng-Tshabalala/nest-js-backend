import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type VehicleDocument = HydratedDocument<Vehicle>;

@Schema()
export class Vehicle {
  @Prop() color: string;
  @Prop() userId: string;
  @Prop() registrationNumber: string;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
