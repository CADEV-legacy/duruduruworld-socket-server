import morgan from 'morgan';

import { logger } from '@/util';

export const morganMiddleware = morgan((tokens, request, response) => {
  const method = tokens.method(request, response);
  const status = tokens.status(request, response);
  const url = tokens.url(request, response);
  const responseTime = tokens['response-time'](request, response);
  const remoteAddr = tokens['remote-addr'](request, response);
  const contentLength = tokens.res(request, response, 'content-length');

  const message = `[${method}]${url} status::${status}  responseTime::${responseTime}ms contentLength::${contentLength} remoteAddr::${remoteAddr}`;

  if (!!status && parseInt(status) < 400) logger.info(message);

  return null;
});
