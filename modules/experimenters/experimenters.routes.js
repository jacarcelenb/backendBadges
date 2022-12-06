import experimentersController from './experimenters.controller.js';

export default [
  {
    path: '/experimenters',
    method: 'get',
    handler: experimentersController.experimenters.find
  },
  {
    path: '/experimenters',
    method: 'post',
    handler: experimentersController.createExperimenter
  },
  {
    path: '/experimenters',
    method: 'put',
    handler: experimentersController.experimenters.update
  },
  {
    path: '/experimenters',
    method: 'delete',
    handler: experimentersController.experimenters.delete
  }
];
