import express from 'express';

import { healthRouter } from './health';
import { newUserRouter } from './newUser';

import { ROUTE_URL } from '@/constant';

export const socketRouter = express.Router();

socketRouter.use(ROUTE_URL.socket.health, healthRouter);
socketRouter.use(ROUTE_URL.socket.newUser, newUserRouter);
