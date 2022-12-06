import labpackController from './labpack.controller.js';

export default [
  {
    path: '/labpack',
    method: 'get',
    private: true,
    handler: labpackController.labpack.find
  },
  {
    path: '/labpack',
    method: 'post',
    private: true,
    handler: labpackController.labpack.create
  },
  {
    path: '/labpack',
    method: 'put',
    private: true,
    handler: labpackController.labpack.update
  }
];
