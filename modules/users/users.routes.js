import usersController from './users.controller.js';
import {createUserSchema} from './users.schema.js';

export default [
  {
    path: '/users',
    method: 'get',
    private: true,
    handler: usersController.users.find
  },
  {
    path: '/users',
    method: 'post',
    private: true,
    schema: createUserSchema,
    handler: usersController.users.create
  }
  ,
  {
    path: '/users',
    method: 'put',
    private: true,
    schema: createUserSchema,
    handler: usersController.users.update
  }
  ,
  {
    path: '/users',
    method: 'delete',
    private: true,
    schema: createUserSchema,
    handler: usersController.users.delete
  },
  {
    path: '/register',
    method: 'post',
    schema: createUserSchema,
    handler: usersController.users.create
  }
];
