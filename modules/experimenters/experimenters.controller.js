import experimentersModel from './experimenters.model.js';
import usersModel from '../users/users.model.js';

export default {
  experimenters: experimentersModel,
  createExperimenter: async (body) => {
    let user_id = body.user;

    if (typeof body.user !== 'string') {
      const user = await usersModel.create(body.user);
      user_id = user._id;
    }

    const experimenter = await experimentersModel.create({
      user: user_id,
      experimenter_roles: body.experimenter_roles,
      experiment: body.experiment,
      admin_experiment: body.admin_experiment,
      corresponding_autor: body.corresponding_autor
    });

    return experimenter;
  }

};
