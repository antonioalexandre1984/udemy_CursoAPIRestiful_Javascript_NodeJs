import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
    return response.json({ message: 'Hello Dev' });
});

// eslint-disable-next-line prettier/prettier
export default routes;