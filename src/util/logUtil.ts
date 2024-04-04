import fs from 'fs';
import path from 'path';

import winston from 'winston';
import winstonDailyRotateFile from 'winston-daily-rotate-file';

const LOG_DIRECTORY = path.join(__dirname, '../log');

if (!fs.existsSync(LOG_DIRECTORY)) fs.mkdirSync(LOG_DIRECTORY);

const { combine, timestamp, printf } = winston.format;

const logFormat = printf(info => {
  return `${info.timestamp} ${info.level}: ${info.message}`;
});

const LOG_LEVELS = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
};

export const logger = winston.createLogger({
  levels: LOG_LEVELS,
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    logFormat
  ),
  transports: [
    new winstonDailyRotateFile({
      level: 'error',
      datePattern: 'YYYY-MM-DD',
      dirname: path.join(LOG_DIRECTORY, 'error'),
      filename: `%DATE%.error.log`,
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '30d',
    }),
    new winstonDailyRotateFile({
      level: 'info',
      datePattern: 'YYYY-MM-DD',
      dirname: path.join(LOG_DIRECTORY, 'info'),
      filename: `%DATE%.info.log`,
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '30d',
    }),
    new winstonDailyRotateFile({
      level: 'warn',
      datePattern: 'YYYY-MM-DD',
      dirname: path.join(LOG_DIRECTORY, 'warn'),
      filename: `%DATE%.warn.log`,
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '30d',
    }),
    new winstonDailyRotateFile({
      level: 'debug',
      datePattern: 'YYYY-MM-DD',
      dirname: path.join(LOG_DIRECTORY, 'debug'),
      filename: `%DATE%.debug.log`,
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '30d',
    }),
  ],
  exceptionHandlers: [
    new winstonDailyRotateFile({
      datePattern: 'YYYY-MM-DD',
      dirname: path.join(LOG_DIRECTORY, 'exception'),
      filename: `%DATE%.exception.log`,
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '30d',
    }),
  ],
  exitOnError: false,
});
