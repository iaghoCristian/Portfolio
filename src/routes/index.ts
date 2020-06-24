import express, { Router } from 'express';
import projectsRouter from './projectsRouter.routes';
import certificatesRouter from './certificatesRouter.routes';
import config from '../config/config';

const routes = Router();

routes.use('/projects', projectsRouter);
routes.use('/certificates', certificatesRouter);
routes.use('/images', express.static(config.imagesDirectory));
routes.use('/icons', express.static(config.iconsDirectory));
routes.use('/videos', express.static(config.videosDirectory));
routes.use('/gifs', express.static(config.gifsDirectory));
routes.use('/certificates/file', express.static(config.certificatesDirectory));

export default routes;
