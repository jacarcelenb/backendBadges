import mongoose from 'mongoose';
import {EXPERIMENTS_REF} from './experiments.js';
import standards from './standards.js';

const id = mongoose.Types.ObjectId;

export const EVALUATIONS_REF = {
};


/** Avaliable statuses: success, fail, pending */
const evaluations = standards.map((standard) => {
  return {
    _id: id(),
    experiment: EXPERIMENTS_REF.experiment_1,
    status: 'pending',
    standard: standard._id
  };
});


export default evaluations;
