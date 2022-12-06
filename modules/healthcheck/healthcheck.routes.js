import healthcheckController from './healthcheck.controller.js';

export default [
  {
    path: '/healthcheck',
    method: 'get',
    handler: healthcheckController.healthcheck
  }
];
