import experimentsController from './experiments.controller.js';

export default [
  {
    path: '/experiments',
    method: 'get',
    private: true,
    handler: experimentsController.getExperiments
  },
  {
    path: '/allexperiments',
    method: 'get',
    private: true,
    handler: experimentsController.getAllExperiments
  },
  {
    path: '/count_experiments',
    method: 'get',
    private: true,
    handler: experimentsController.experimentsCount
  },
  {
    path: '/experiments',
    method: 'post',
    private: true,
    handler: experimentsController.createExperiment
  }
  ,
  {
    path: '/experiments',
    method: 'put',
    private: true,
    handler: experimentsController.updateExperiment
  }
  ,
  {
    path: '/experiments',
    method: 'delete',
    private: true,
    handler: experimentsController.deleteExperiment
  }
];
