import loggerService from '../services/logger.service.js';
import localeService from '../services/locale.service.js';

const logger = loggerService();
const {__t} = localeService(logger);

global.__t = __t;
global.logger = logger;
