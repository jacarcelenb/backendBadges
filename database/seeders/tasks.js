import mongoose from 'mongoose';
import {TASK_TYPE_REF} from './task_types.js';
import {EXPERIMENTER_ROLES_REF} from './experimenter_roles.js';
import {EXPERIMENTS_REF} from './experiments.js';

const id = mongoose.Types.ObjectId;

export const TASKS_REF = {
  task_1_for_experiment_1: id('623fb1b764fd56550e229ed4'),
  task_with_artifacts: id('623fb1b764fd56550e229ed5')
};

export default [
  {
    _id: TASKS_REF.task_1_for_experiment_1,
    name: 'Task 1',
    description: 'Task 1 description',
    start_date: new Date(),
    end_date: new Date(Date.now() + Math.abs(24 * 60 * 60 * 1000)),
    duration: '10:00:00',
    responsible: EXPERIMENTER_ROLES_REF.designer,
    task_type: TASK_TYPE_REF.experimental,
    experiment: EXPERIMENTS_REF.experiment_1
  },
  {
    _id: TASKS_REF.task_with_artifacts,
    name: 'Task with artifacts',
    description: 'Task with artifacts description',
    start_date: new Date(),
    end_date: new Date(Date.now() + Math.abs(24 * 60 * 60 * 1000)),
    duration: '10:00:00',
    responsible: EXPERIMENTER_ROLES_REF.designer,
    task_type: TASK_TYPE_REF.formacion,
    experiment: EXPERIMENTS_REF.experiment_1
  }
];
