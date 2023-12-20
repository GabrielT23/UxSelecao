import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import { errorInterceptor } from './errors/errorInterceptor';

const app = express();

// Adicione o middleware cors
app.use(cors());

app.use(express.json());
app.use(routes);
app.use(errorInterceptor);

export { app };


