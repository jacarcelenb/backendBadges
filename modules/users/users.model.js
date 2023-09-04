import mongoose from 'mongoose';
import model from '../core/model.js';
import cryptService from '../../services/crypt.service.js';
import {InvalidCredentialsException, UserNotFoundException} from '../exceptions.js';

const crypt = cryptService();

const usersSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true
  },
  identification: {
    type: String,
    default: "No se registra"
  },
  country: {
    type: String,
    default: "No se registra"
  },
  country_state: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    select: false
  },
  affiliation: {
    type: String,
    default: "No se registra"
  },
  phone: {
    type: String,
    default: "No se registra"
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user_profiles',
    default: null
  },
  gender: {
    type: String,
    required: true
  },
  website: {
    type: String,
    default:"No se registra"
  },
  userphoto: {
    type: String,
  },
  file_location_path: {
    type: String,
    default:"No se registra"
  },
  resetPassword: {
    type: String,
    default:"No se registra"
  }

}, {collection: 'users', timestamps: true});

export const users = mongoose.model('users', usersSchema);

const users_crud = model(users);

const create_user = users_crud.create;

users_crud.create = async (body = {}) => {
  const password = await crypt.encrypt(body.password);
  const user = await create_user({
    ...body,
    password
  });

  return user;
};

users_crud.comparePassword = async function comparePassword (email, password) {
  const data = await users_crud.find({email}, {
    select: 'email password'
  });
  if (!data.length) {
    throw new UserNotFoundException();
  }

  const user = data[0];
  const isMatch = await crypt.compare(password, user.password);

  if (!isMatch) {
    throw new InvalidCredentialsException();
  }

  return users_crud.find({email});
};

users_crud.SignWithEmail = async function SignWithEmail (email) {
  const data = await users_crud.find({email}, {
    select: 'email password'
  });
  if (!data.length) {
    throw new UserNotFoundException();
  }

  return users_crud.find({email});
};

users_crud.ValidateEmail = async function ValidateEmail (email) {
  const data = await users_crud.find({email}, {
    select: 'email password'
  });
  if (!data.length) {
    return "OK"
  }
  return "Error";

};
export default users_crud;
