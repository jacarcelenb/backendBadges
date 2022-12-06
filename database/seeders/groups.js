import mongoose from 'mongoose';
import {EXPERIMENTS_REF} from './experiments.js';
import {GROUP_TYPES_REF} from './group_types.js';

const id = mongoose.Types.ObjectId;

export const GROUPS_REF = {
  group_1: id('5f1b9b9e9c9d440000a1b1f1'),
  group_2: id('5f1b9b9e9c9d440000a1b1f2'),
  group_3: id('5f1b9b9e9c9d440000a1b1f3')
};

export default [
  {
    _id: GROUPS_REF.group_1,
    description: 'Group 1',
    experiment: EXPERIMENTS_REF.experiment_1,
    group_type: GROUP_TYPES_REF.experimental
  },
  {
    _id: GROUPS_REF.group_2,
    description: 'Group 2',
    experiment: EXPERIMENTS_REF.experiment_1,
    group_type: GROUP_TYPES_REF.experimental
  },
  {
    _id: GROUPS_REF.group_3,
    description: 'Group 3',
    experiment: EXPERIMENTS_REF.experiment_1,
    group_type: GROUP_TYPES_REF.experimental
  }
];
