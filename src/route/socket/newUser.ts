import express from 'express';

import { socketIO } from '@/lib';
import { logger } from '@/util';

export const newUserRouter = express.Router();

const NUMBER_REGEX = /^[0-9]+$/;

newUserRouter.get('/', (request, response) => {
  try {
    if (!socketIO) throw new Error('socketIO is not initialized');

    const userCount = request.query.userCount;

    // TODO: Implement validation.
    if (typeof userCount !== 'string') throw new Error('userCount is not a string');

    if (!NUMBER_REGEX.test(userCount)) throw new Error('userCount is not a number');

    socketIO.emit('new-user', parseInt(userCount));

    // TODO: Implement handling response.
    response.status(200).json({
      message: 'OK',
    });
  } catch (error) {
    logger.error(error);

    response.status(500).json({
      message: 'Internal Server Error',
    });
  }
});
