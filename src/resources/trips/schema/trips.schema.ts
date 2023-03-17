import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TripDocument = HydratedDocument<Trip>;

@Schema()
export class Trip {
  @Prop() price: string;
  @Prop() status: string;
  @Prop() rider: string;
  @Prop() driver: string;
}

export const TripSchema = SchemaFactory.createForClass(Trip);
