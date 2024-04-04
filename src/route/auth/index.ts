import express from 'express';

export const authRouter = express.Router();

authRouter.get('/', (req, res) => {
  res.status(200).json({
    message: 'OK',
  });
});
