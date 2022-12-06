import usersProfilesController from './user_profiles.controller.js';

export default [
  {
    path: '/user_profiles',
    method: 'get',
    handler: usersProfilesController.usersProfiles.find
  }
];
