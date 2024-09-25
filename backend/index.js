import express from 'express';
import { configureRoutes } from './routes.js';
import { configureSwagger } from './swagger.js';
import { configureDependencies } from './dependencies.js';
import { configureMiddlewares } from './middlewares.js';
import { Dependency } from './libs/dependency.js';
import mongoose from 'mongoose';

const app = express();

// Configurar dependencias y middlewares
configureDependencies();
const router = configureMiddlewares(app);

const conf = Dependency.get('conf');

mongoose.connect(conf.db); //://127.0.0.1:27017/tuds-da'//

// Configurar rutas y swagger
configureRoutes(router);
configureSwagger(router);

// Ruta de prueba
router.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

// Iniciar el servidor
app.listen(conf.port, () => {
  console.log(`El servidor está aceptando conexiones en el puerto ${conf.port}`);
});

