import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const application = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug']
  });
  await application.listen(3000);
}
bootstrap();
