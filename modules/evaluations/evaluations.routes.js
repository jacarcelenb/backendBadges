import evaluationsController from './evaluations.controller.js';

export default [
  {
    path: '/evaluations',
    method: 'get',
    handler: evaluationsController.evaluations.find
  },
  {
    path: '/evaluations',
    method: 'delete',
    private: true,
    handler: evaluationsController.evaluations.delete
  },
  {
    path: '/evaluations',
    method: 'post',
    handler: evaluationsController.evaluations.create
  }
];
