import mongoose from 'mongoose';
import {USERS_REF} from './users.js';
import {EXPERIMENTS_REF} from './experiments.js';
import {EXPERIMENTER_ROLES_REF} from './experimenter_roles.js';

const id = mongoose.Types.ObjectId;

export default [
  {
    _id: id(),
    user: USERS_REF.admin,
    experimenter_roles: [
      EXPERIMENTER_ROLES_REF.analyst,
      EXPERIMENTER_ROLES_REF.designer
    ],
    experiment: EXPERIMENTS_REF.experiment_1
  },
  {
    _id: id(),
    user: USERS_REF.experimenter,
    experimenter_roles: [
      EXPERIMENTER_ROLES_REF.monitor,
      EXPERIMENTER_ROLES_REF.designer
    ],
    experiment: EXPERIMENTS_REF.experiment_1
  }
];
