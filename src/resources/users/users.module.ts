import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './schema/users.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailService } from 'src/api/mail.api';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports:[
    MongooseModule.forFeature([{ 
      name: User.name, 
      schema: UserSchema 
    }]), 
    EventEmitterModule.forRoot(),
    MailerModule.forRoot({
      transport: {
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "4db9ce7ed233df",
          pass: "35a9a6a72b57ce"
        }
      }
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
