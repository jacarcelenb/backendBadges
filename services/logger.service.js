import vars from '../config/vars.js';
import {createLogger, format, transports} from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple()
      ),
      level: 'debug'

    }),
    new transports.File({
      filename: 'logs/error.log',
      handleRejections: true,
      handleExceptions: true,
      tailable: true,
      level: 'error'
    }),
    new transports.File({
      filename: 'logs/info.log',
      level: 'info'
    }),
    new transports.File({
      filename: 'logs/warn.log',
      level: 'warn'
    })
  ],
  exitOnError: false
});

export default () => {
  return {
    info (message, obj) {
      logger.log('info', message, {
        obj, message
      });
    },
    debug (message, obj) {
      if (!vars.production) {
        logger.log('debug', message, {
          obj, message
        });
      }
    },
    warn (message, obj) {
      logger.log('warn', message, {
        obj, message
      });
    },
    error (message, obj) {
      logger.log('error', message, {
        obj, message
      });
    }
  };
};
