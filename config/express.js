import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import vars from './vars.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import errorsMiddleware from '../middlewares/errors.middleware.js';
import localeMiddleware from '../middlewares/locale.middleware.js';
import routes_setup from './routes_setup.js';
import routes from '../modules/routes.js';
import helpers from '../helpers/index.js';

const __dirname = helpers.getDirname(import.meta.url);

const app = express();

// Enable CORS
app.use(cors());

// Handle public folder for static files
app.use(express.static(path.join(__dirname, '../public')));

// Mount [api] routes
routes_setup(routes, app, {
  path_prefix: '/api',
  after_middlewares: [
    // Parse application/JSON
    bodyParser.json(),
    bodyParser.urlencoded({extended: true})
  ],
  // Mount locale middleware to handle locale changes
  before_middlewares: [localeMiddleware()],
  // Add auth middleware
  auth_middlewares: [authMiddleware(routes)]
});

if (vars.production) {
  app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
}


// Mount [errors] middleware
app.use(errorsMiddleware());

export default app;
