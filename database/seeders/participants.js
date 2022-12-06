import mongoose from 'mongoose';
import {EXPERIMENTS_REF} from './experiments.js';
import {GROUPS_REF} from './groups.js';

const id = mongoose.Types.ObjectId;

export const PARTICIPANTS_REF = {
  participant_1: id('5f1b9b9e9c9d440000a1b1f1'),
  participant_2: id('5f1b9b9e9c9d440000a1b1f2'),
  participant_3: id('5f1b9b9e9c9d440000a1b1f3'),
  participant_4: id('5f1b9b9e9c9d440000a1b1f4'),
  participant_5: id('5f1b9b9e9c9d440000a1b1f5'),
  participant_6: id('5f1b9b9e9c9d440000a1b1f6')
};

export default [
  {
    _id: PARTICIPANTS_REF.participant_1,
    order: 2,
    avatar: `https://avatars.dicebear.com/api/identicon/${PARTICIPANTS_REF.participant_1}.svg`,
    comment: 'Participant 1',
    experiment: EXPERIMENTS_REF.experiment_1,
    group: GROUPS_REF.group_1
  },
  {
    _id: PARTICIPANTS_REF.participant_2,
    order: 3,
    avatar: `https://avatars.dicebear.com/api/identicon/${PARTICIPANTS_REF.participant_2}.svg`,
    comment: 'Participant 2',
    experiment: EXPERIMENTS_REF.experiment_1,
    group: GROUPS_REF.group_1
  },
  {
    _id: PARTICIPANTS_REF.participant_3,
    order: 4,
    avatar: `https://avatars.dicebear.com/api/identicon/${PARTICIPANTS_REF.participant_3}.svg`,
    comment: 'Participant 3',
    experiment: EXPERIMENTS_REF.experiment_1,
    group: GROUPS_REF.group_1
  },
  {
    _id: PARTICIPANTS_REF.participant_4,
    order: 1,
    avatar: `https://avatars.dicebear.com/api/identicon/${PARTICIPANTS_REF.participant_4}.svg`,
    comment: 'Participant 1',
    experiment: EXPERIMENTS_REF.experiment_1,
    group: GROUPS_REF.group_2
  },
  {
    _id: PARTICIPANTS_REF.participant_5,
    order: 2,
    avatar: `https://avatars.dicebear.com/api/identicon/${PARTICIPANTS_REF.participant_5}.svg`,
    comment: 'Participant 2',
    experiment: EXPERIMENTS_REF.experiment_1,
    group: GROUPS_REF.group_2
  },
  {
    _id: PARTICIPANTS_REF.participant_6,
    order: 3,
    avatar: `https://avatars.dicebear.com/api/identicon/${PARTICIPANTS_REF.participant_6}.svg`,
    comment: 'Participant 3',
    experiment: EXPERIMENTS_REF.experiment_1,
    group: GROUPS_REF.group_2
  }
];
