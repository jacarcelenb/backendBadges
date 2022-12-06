/* eslint-disable no-ternary */
import experimentModel from '../experiments/experiments.model.js';
import badgesModel from '../badges/badges.model.js';
import evaluationsModel from '../evaluations/evaluations.model.js';
import {ExperimentNotFoundException} from '../exceptions.js';
import __ from 'underscore';

export default {
  findByExperiment: async (filter, params) => {
    if (!filter.experiment) {
      throw new ExperimentNotFoundException();
    }

    const experiment = await experimentModel.find({_id: filter.experiment});

    if (experiment.length === 0) {
      throw new ExperimentNotFoundException();
    }

    const evaluations = await evaluationsModel.find({
      experiment: filter.experiment
    }, params);

    const badges = await badgesModel.find({}, {
      populate: 'standards,standards.standard_type,standards.property'
    });
    
    let qualified_standards = [];
    const qualified_badges = badges.map((badge) => {
      let passed = 0;

      const standards = badge.standards.map((standard) => {
        const evaluation = __(evaluations).findWhere({});
        const status = evaluation.status;

        if (status === 'success') {
          passed += 1;
        }

        return {
          ...standard,
          status
        };
      });

      qualified_standards = __.union(qualified_standards, standards);

      const percentage = badge.standards.length
        ? Math.round(Math.round(passed * 100) / badge.standards.length)
        : 0;

      return {
        ...badge,
        percentage
      };
    });

    return {qualified_badges, qualified_standards: __(qualified_standards).unique('_id')};
  }
};
