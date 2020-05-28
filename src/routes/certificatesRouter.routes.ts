import { Router } from 'express';
import { getRepository } from 'typeorm';
import Certificate from '../models/Certificate';

const certificatesRouter = Router();

certificatesRouter.post('/', async (request, response) => {
  const { title, description, filePath } = request.body;

  const repository = getRepository(Certificate);
  const certificate = repository.create({
    title,
    description,
    filePath,
  });

  await repository.save(certificate);

  return response.json({ certificate });
});

certificatesRouter.get('/', async (request, response) => {
  const repository = getRepository(Certificate);
  const certificates = await repository.find();

  return response.json({ certificates });
});

certificatesRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const repository = getRepository(Certificate);
  const certificate = await repository.find({ where: { id } });

  return response.json({ certificate });
});

export default certificatesRouter;
