/* eslint-disable */
import mongoose from 'mongoose';

const process_for_shutdown = [
  () => mongoose.connection.close(true),
];

const shutdown_app = () => {
  process_for_shutdown.forEach((shutdownProcess) => {
    if (shutdownProcess) {
      shutdownProcess();
    }
  });
};

process.on('SIGINT', (err) => {
  logger.error('uncaughtException', err.message);
  shutdown_app();
  process.exit(1);
});

process.on('uncaughtException', (err) => {
  logger.error('uncaughtException', err.message);
  shutdown_app();
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  logger.error('unhandledRejection', err.message);
  shutdown_app();
  process.exit(1);
});
