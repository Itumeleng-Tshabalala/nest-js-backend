import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './middleware/logger.middleware';
async function bootstrap() {
  
  const application = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug']
  });

  application.use(logger);

  await application.listen(3000);
}
bootstrap();
