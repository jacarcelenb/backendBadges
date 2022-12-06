import mongoose from 'mongoose';
import {USERS_REF} from './users.js';

const id = mongoose.Types.ObjectId;

export const EXPERIMENTS_REF = {
  experiment_1: id('623fb1b764fd56550e229ed6')
};

export default [
  {
    _id: EXPERIMENTS_REF.experiment_1,
    code: 'EXP_001',
    name: 'Experiment 1',
    country: 'Ecuador',
    country_state: 'Pichincha',
    objective: null,
    gqm_objective: {
      objective_analyze: 'Analyze the objective of the experiment',
      with_purpose: 'With the purpose of',
      with_respect_that: 'With respect to',
      with_viewpoint: 'With viewpoint',
      in_the_context_of: 'In the context of'
    },
    doi_code: '10.1038/nrg4010',
    description: 'This is the description of the experiment 1',
    principal_experimenter_author: USERS_REF.experimenter,
    created_date: '2018-01-01T00:00:00.000Z',
    reason: 'Find the disadvantages of use specifics methods in pair programming',
    has_scripts: true,
    has_software: false,
    has_source_code: false
  }
];
