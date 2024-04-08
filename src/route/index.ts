import express from 'express';

import { healthRouter } from './health';
import { socketRouter } from './socket';

import { ROUTE_URL } from '@/constant';

export const router = express.Router();

router.use(ROUTE_URL.health.prefix, healthRouter);
router.use(ROUTE_URL.socket.prefix, socketRouter);
