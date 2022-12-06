/* eslint-disable id-length */
/* eslint-disable no-plusplus */
import _ from 'underscore';
import mongoose from 'mongoose';
import participantsModel from './participants.model.js';

const id = mongoose.Types.ObjectId;

participantsModel.create = async ({count = 0, group, experiment}) => {
  const participants = await participantsModel.find({group, experiment}, {sort: {order: 1}});
  const participants_orders_left = get_participants_order_left(participants, count);

  const new_participants_promises = _(participants_orders_left).map((order) => {
    const random_id = id();

    return {
      _id: random_id,
      avatar: `https://avatars.dicebear.com/api/identicon/${random_id}.svg`,
      comment: `Participant ${order}`,
      order,
      group,
      experiment
    };
  });

  await participantsModel.model.insertMany(new_participants_promises);

  return participantsModel.find({group, experiment}, {sort: {order: 1}});
};

export default {
  participants: participantsModel
};

function get_participants_order_left (participants, count) {
  const participants_count = participants.length + count;
  const participants_by_order = _(participants).groupBy('order');
  const participants_orders_left = [];

  for (let order = 1; order <= participants_count; order++) {
    if (!participants_by_order[order]) {
      participants_orders_left.push(order);
    }
  }

  return participants_orders_left;
}
