import './config/globals.js';
import './config/signals.js';
import vars from './config/vars.js';
import app from './config/express.js';
import mongoose from './config/mongoose.js';

mongoose.connect(vars.databaseURL).
then(() => {
  app.listen(vars.port, () => {
    logger.info(`Server started on port ${vars.port}`);
  });
});
