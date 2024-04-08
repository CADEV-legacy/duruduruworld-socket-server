import express from 'express';

export const healthRouter = express.Router();

healthRouter.get('/', (_req, res) => {
  res.send('OK');
});
