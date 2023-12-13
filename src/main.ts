import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  
  const config = new DocumentBuilder().setTitle('Nidum')
    .setDescription('Task management API for demonstration purposes')
    .addBearerAuth()
    .setVersion('1.0')
    .addTag('tasks', 'Following the basic concepts of a CRUD, you can create, read, update and delete tasks trough a JWT bearer token authentication')
    .addTag('users', 'Following a more basic type of management, you can create users and login trough a user/password based authentication')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000, '0.0.0.0');
}
bootstrap();
