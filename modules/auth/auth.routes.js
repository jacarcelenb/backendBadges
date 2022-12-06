import authController from './auth.controller.js';
import {loginSchema} from './auth.schemas.js';

export default [
  {
    path: '/auth/login',
    method: 'post',
    schema: loginSchema,
    handler: authController.login
  }
];
