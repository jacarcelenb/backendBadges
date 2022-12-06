import repositoryController from './repository_type.controller.js';

export default [
  {
    path: '/repository',
    method: 'get',
    handler: repositoryController.repository.find
  }
];