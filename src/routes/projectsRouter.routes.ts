import { Router } from 'express';
import { getRepository } from 'typeorm';
import Project from '../models/Project';

const projectsRouter = Router();

projectsRouter.post('/', async (request, response) => {
  const {
    name,
    description,
    imagePath,
    mediaPath,
    githubLink,
    link,
    certificate_id,
    gifPath,
    iconPath,
  } = request.body;

  const repository = getRepository(Project);
  const project = repository.create({
    name,
    description,
    imagePath,
    mediaPath,
    githubLink,
    link,
    certificate_id,
    gifPath,
    iconPath,
  });

  await repository.save(project);

  return response.json({ project });
});

projectsRouter.get('/', async (request, response) => {
  const repository = getRepository(Project);

  const projects = await repository.find();

  return response.json({ projects });
});

projectsRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const repository = getRepository(Project);

  const project = await repository.findOne({ where: { id } });

  return response.json({ project });
});

export default projectsRouter;
