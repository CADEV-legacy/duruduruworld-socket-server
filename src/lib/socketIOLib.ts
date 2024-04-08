import http from 'http';

import { Server } from 'socket.io';

import { SETTING } from '@/setting';
import { logger } from '@/util';

export let socketIO: Server | undefined = undefined;

export const Socket = (server: http.Server) => {
  socketIO = new Server(server, {
    cors: {
      origin: [SETTING.ACCESS_ALLOWED_ORIGIN],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    },
  });

  socketIO.on('connection', socket => {
    logger.info('Client connected', socket.id);

    socket.on('disconnect', () => logger.info('Client disconnected', socket.id));
  });
};
