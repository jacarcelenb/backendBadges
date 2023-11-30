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
  },
  {
    path: '/auth/getTokenGithub',
    method: 'post',
    handler: authController.GetTokenGithub
  }
  ,
  {
    path: '/auth/getRepoList/',
    method: 'post',
    handler: authController.getRepoUser
  },

  {
    path: '/auth/createRepo',
    method: 'post',
    handler: authController.CreateGithubRepository
  },
  {
    path: '/auth/uploadFileRepository',
    method: 'post',
    handler: authController.UploadFileRepository
  },
  {
    path: '/auth/deleteFileRepository',
    method: 'post',
    handler: authController.DeleteFileRepository
  },
  {
    path: '/auth/updateRepository',
    method: 'post',
    handler: authController.UpdateRepository
  },
  {
    path: '/auth/deleteRepository',
    method: 'post',
    handler: authController.DeleteRepository
  },


];
