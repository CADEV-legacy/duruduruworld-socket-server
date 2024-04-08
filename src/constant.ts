export const ROUTE_URL = {
  api: '/api',
  health: {
    prefix: '/health',
  },
  socket: {
    prefix: '/socket',
    health: '/health',
    newUser: '/new-user',
  },
} as const;
