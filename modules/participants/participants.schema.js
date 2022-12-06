import Joi from 'joi';

export const createParticipantsSchema = {
  body: {
    count: Joi.number().required(),
    group: Joi.string().required(),
    experiment: Joi.string().required()
  }
};

export const deleteParticipantSchema = {
  query: {
    _id: Joi.string().required()
  }
};
