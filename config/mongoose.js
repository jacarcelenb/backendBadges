import mongoose from 'mongoose';
import '../modules/models.js';

export default {
  connect (url) {
    return mongoose.connect(url, {
      useNewUrlParser: true
    }).then((connection) => {
      logger.info('Connected to MongoDB');

      return connection;
    });
  }
};
