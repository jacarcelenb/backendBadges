// eslint-disable-next-line id-length
import _ from 'underscore';
import participantsModel from '../participants/participants.model.js';
import groupsModel from './groups.model.js';
import groupTypesModel from './group_types.model.js';

const parentGroupsFind = groupsModel.find;

groupsModel.find = async (raw_query, options) => {
  const query_options = _(raw_query).pick('experiment', 'participants');
  const query = _(raw_query).omit('participants');

  const groups = await parentGroupsFind(query, options);
  if (query_options.participants && query_options.experiment) {
    const participants = await participantsModel.find({experiment: query.experiment});
    const participantsByGroup = _(participants).groupBy('group');
    
    _(groups).each((group) => {
      group.participants = participantsByGroup[group._id] || [];
    });
  }

  return groups;
};

export default {
  groups: groupsModel,
  group_types: groupTypesModel
};
