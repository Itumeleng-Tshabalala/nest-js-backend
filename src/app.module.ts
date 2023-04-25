import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResourceModule } from './resources/resources.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { MailerModule } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { UsersModule } from './resources/users/users.module';
import { MailService } from './api/mail.api';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
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
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(`mongodb+srv://Itumeleng:itumeleng@cluster0.r6wnj.mongodb.net/nest_js_db?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    EventEmitterModule.forRoot(),
    ResourceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// glvWWUebfDtqWSfM 