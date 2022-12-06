import packageTypeController from './package_type.controller.js';

export default [
  {
    path: '/package_type',
    method: 'get',
    handler: packageTypeController.package_type.find
  }
];