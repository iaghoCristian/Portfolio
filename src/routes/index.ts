import express, { Router } from 'express';
import projectsRouter from './projectsRouter.routes';
import certificatesRouter from './certificatesRouter.routes';
import config from '../config/config';

const routes = Router();

routes.use('/projects', projectsRouter);
routes.use('/certificates', certificatesRouter);
routes.use('/files', express.static(config.imagesDirectory));

export default routes;
