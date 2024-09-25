import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

export function configureSwagger(router) {
  const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Proyecto Desarrollo de Aplicativos',
        version: '1.0.0',
        description: 'Proyecto para completar el curso de desarrollo de aplicativos.',
      },
      servers: [{ url: '/api' }],
    },
    apis: [
      './components/**/*.yaml',
    ],
  };

  const swaggerSpec = swaggerJSDoc(swaggerOptions);

  router.use('/swagger', swaggerUi.serve);
  router.get('/swagger', swaggerUi.setup(swaggerSpec)); // Agregado el parámetro swaggerSpec

  // También podrías usar el siguiente enfoque para una configuración más simple:
  // router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}