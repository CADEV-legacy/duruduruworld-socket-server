import express from 'express';

import { authRouter } from './auth';
import { healthRouter } from './health';
import { userRouter } from './user';

import { ROUTE_URL } from '@/constant';

export const router = express.Router();

router.use(ROUTE_URL.auth.prefix, authRouter);
router.use(ROUTE_URL.health.prefix, healthRouter);
router.use(ROUTE_URL.user.prefix, userRouter);
