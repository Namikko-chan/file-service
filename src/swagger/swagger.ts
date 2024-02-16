import { INestApplication, } from '@nestjs/common';
import { ConfigService, } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule, } from '@nestjs/swagger';

export function initSwagger(app: INestApplication, config: ConfigService) {
  const url = `${config.get<string>('BASE_URL') ?? '127.0.0.1'}:${config.get<string>('SERVER_PORT') ?? 3050}`;
  const routePrefix = config.get<string>('ROUTE_PREFIX') ?? 'api';
  const route = config.get<string>('SWAGGER_PREFIX') ?? 'swagger';
  const documentBuilder = new DocumentBuilder()
    .setTitle('File-service API Documentation')
    .setDescription('File-service API Documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .addServer(`http://${url}/`)
    .addServer(`https://${url}/`)
    .build();

  const document = SwaggerModule.createDocument(app, documentBuilder);
  SwaggerModule.setup(`${routePrefix}/${route}`, app, document);
}