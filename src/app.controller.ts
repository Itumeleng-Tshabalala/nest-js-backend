import { Controller, Get } from '@nestjs/common';
import { MailService } from './api/mail.api';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getIsApiUp() {
    return this.appService.getIsApiUp();
  }
}
