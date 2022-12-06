import badgesController from './badges.controller.js';
export default [
  {
    path: '/badges',
    method: 'get',
    handler: badgesController.badges.find
  }
];
