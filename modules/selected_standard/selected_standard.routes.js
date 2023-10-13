import standardsController from './selected_standard.controller.js';

export default [
  {
    path: '/select_standard',
    method: 'get',
    private: true,
    handler: standardsController.standards.find
  },
  {
    path: '/select_standard',
    method: 'post',
    private: true,
    handler: standardsController.standards.create
  },
  {
    path: '/update_select_standard',
    method: 'put',
    private: true,
    handler: standardsController.standards.update
  },

];