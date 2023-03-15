import Joi from 'joi';

export const loginSchema = {
  body: {
    email: Joi.string().email().
    required(),
    password: Joi.string().required()
  }
};

export const ResetPasswordSchema = {
  body: {
    email: Joi.string().email().
    required(),
  }
};
