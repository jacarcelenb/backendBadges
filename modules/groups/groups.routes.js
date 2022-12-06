import groupsController from './groups.controller.js';
import {createGroupSchema} from './groups.schema.js';

export default [
  {
    path: '/groups',
    method: 'get',
    private: false,
    handler: groupsController.groups.find
  },
  {
    path: '/groups_count',
    method: 'get',
    private: true,
    handler: groupsController.groups.count
  },
  {
    path: '/groups',
    method: 'post',
    private: true,
    schema: createGroupSchema,
    handler: groupsController.groups.create
  },
  {
    path: '/groups',
    method: 'delete',
    private: true,
    schema: createGroupSchema,
    handler: groupsController.groups.delete
  },
  {
    path: '/groups',
    method: 'put',
    private: true,
    schema: createGroupSchema,
    handler: groupsController.groups.update
  },
  {
    path: '/group_types',
    method: 'get',
    private: false,
    handler: groupsController.group_types.find
  }
];
