import experimenterRolesController from './experimenter_roles.controller.js';

export default [
  {
    path: '/experimenter_roles',
    method: 'get',
    private: true,
    handler: experimenterRolesController.experimenterRoles.find
  }
];
