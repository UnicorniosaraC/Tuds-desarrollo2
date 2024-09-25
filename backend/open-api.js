import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

export function configureOpenApi(router) {
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
    apis: ['./components/users/*.js'], // Rutas de archivos que contienen las definiciones de tus APIs
  };

  const swaggerSpec = swaggerJSDoc(swaggerOptions);

  router.use('/swagger', swaggerUi.serve);
  router.get('/swagger', swaggerUi.setup(swaggerSpec));
}