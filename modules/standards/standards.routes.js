import standardsController from './standards.controller.js';

export default [
  {
    path: '/standards',
    method: 'get',
    private: true,
    handler: standardsController.standards.find
  },
  {
    path: '/standards_types',
    method: 'get',
    private: true,
    handler: standardsController.standardsTypes.find
  },

];
