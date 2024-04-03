const DEFAULT_PORT_NUMBER = 8000;
const DEFAULT_DOMAIN = 'http://localhost:8000';
const DEFAULT_API_PREFIX = '/api';

export const SETTING = {
  PORT_NUMBER: process.env.PORT_NUMBER || DEFAULT_PORT_NUMBER,
  DOMAIN: process.env.DOMAIN || DEFAULT_DOMAIN,
  API_PREFIX: process.env.API_PREFIX || DEFAULT_API_PREFIX,
} as const;
