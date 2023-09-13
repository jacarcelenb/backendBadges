import authController from './auth.controller.js';
import {loginSchema} from './auth.schemas.js';
import { ResetPasswordSchema } from './auth.schemas.js';

export default [
  {
    path: '/auth/login',
    method: 'post',
    schema: loginSchema,
    handler: authController.login
  },
  {
    path: '/auth/forgotpassword',
    method: 'post',
    schema: ResetPasswordSchema,
    handler: authController.forgotPassword
  },
  {
    path: '/auth/verifyEmail',
    method: 'post',
    schema: ResetPasswordSchema,
    handler: authController.validateEmail
  }
  ,
  {
    path: '/auth/UpdateEmail',
    method: 'post',
    handler: authController.updateUserEmail
  }
];
