import participantsController from './participants.controller.js';
import {createParticipantsSchema, deleteParticipantSchema} from './participants.schema.js';

export default [
  {
    path: '/participants',
    method: 'get',
    private: false,
    handler: participantsController.participants.find
  },
  {
    path: '/participants',
    method: 'post',
    private: true,
    schema: createParticipantsSchema,
    handler: participantsController.participants.create
  },
  {
    path: '/participants',
    method: 'put',
    private: true,
    handler: participantsController.participants.update
  },
  {
    path: '/participants',
    method: 'delete',
    private: true,
    schema: deleteParticipantSchema,
    handler: participantsController.participants.delete
  }
];
