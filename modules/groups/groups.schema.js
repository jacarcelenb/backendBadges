import Joi from 'joi';

export const createGroupSchema = {
  body: {
    description: Joi.string().required(),
    experiment: Joi.string().required(),
    group_type: Joi.string().required()
  }
};
