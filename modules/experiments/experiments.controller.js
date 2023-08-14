import experimentsModel from './experiments.model.js';
import experimentersModel from '../experimenters/experimenters.model.js';
import experimenterRolesModel from '../experimenter_roles/experimenter_roles.model.js';

export default {
  getExperiments: async (filter, options, req) => {
    const userExperiments = await experimentersModel.find({
      user: req.auth_payload.user
    });

    if (!userExperiments.length) {
      return [];
    }

    const experiments_of_user = userExperiments.map((user) => {
      return user.experiment.toString();
    });

    if (filter._id && !experiments_of_user.includes(filter._id)) {
      return [];
    }



    return experiments_of_user;
  },
  experimentsCount: async (filter, options) => {
    const experiments = await experimentsModel.find(
      filter,
      options
    );

    return experiments.length;
  },
  createExperiment: async (body, req) => {
    const experiment = await experimentsModel.create(body);

    const user = req.auth_payload.user;

    let experimenter_roles = await experimenterRolesModel.find({});
    experimenter_roles = experimenter_roles.map((experimenter_role) => {
      return experimenter_role._id;
    });

    await experimentersModel.create({
      user,
      experimenter_roles,
      experiment: experiment._id,
      admin_experiment: true,
      corresponding_autor: false
    });

    return experiment;
  }, updateExperiment: async (_id, body) => {
    const experiments = await experimentsModel.update(
      _id,
      body
    );

    return experiments;
  }, deleteExperiment: async(_id)=>{
    const experiments = await experimentsModel.delete(
      _id
    );

  }, getAllExperiments: async(filter, options) =>{
      const experiments = await experimentsModel.find(filter, options);
      return experiments
  }

};
