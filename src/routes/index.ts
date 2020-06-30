import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import listRouter from './list.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);

routes.use('/list', listRouter);

export default routes;