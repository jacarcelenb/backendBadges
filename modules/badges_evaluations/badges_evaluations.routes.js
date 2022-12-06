import badgesEvaluationsController from './badges_evaluations.controller.js';

export default [
  {
    path: '/badges_evaluations',
    method: 'get',
    private: true,
    handler: badgesEvaluationsController.findByExperiment
  }
];
