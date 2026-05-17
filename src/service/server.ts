import router from '@server/rutas/router.js';
import express, { type Application } from 'express';
import morgan from 'morgan';

const app: Application = express()///inicializamos exxpress

app.use(morgan('dev'));
app.use(express.json())//para poder recibir los mensajes tuoi json
///aqui se contruye la app
app.use("/api/v1", router())
export default app;