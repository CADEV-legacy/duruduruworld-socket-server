import { createServer } from 'http';

import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors, { CorsOptions } from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

import { Socket } from './lib';

import { morganMiddleware } from '@/middleware';
import { router } from '@/route';
import { SETTING } from '@/setting';
import { logger } from '@/util';

const app = express();
const httpServer = createServer(app);
Socket(httpServer);

const corsOption: CorsOptions = {
  origin: [SETTING.ACCESS_ALLOWED_ORIGIN],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
};

app.use(cors(corsOption));
app.use(helmet());
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(SETTING.API_PREFIX, router);
app.use(morganMiddleware);

httpServer.listen(SETTING.PORT_NUMBER, () =>
  logger.info(`Server is running on ${SETTING.PORT_NUMBER}`)
);
