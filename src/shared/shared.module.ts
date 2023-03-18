import { Module } from '@nestjs/common';
import { MailService } from 'src/api/mail.api';

@Module({
  imports: [],
  controllers: [],
  providers: [MailService],
})
export class SharedModule {}
