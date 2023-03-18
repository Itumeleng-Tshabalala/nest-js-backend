import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Status } from 'src/shared/enum/status.enum';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop() id: string;
  @Prop({ required: true }) name: string;
  @Prop({
    required: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ],
    unique: true,
  }) email: string;
  @Prop({ default: Status.INITIATED ,required: true }) status: string;
  @Prop({ required: true }) externalId: string;
  @Prop({ default: Date.now }) createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
