import mongoose from 'mongoose';
import model from '../core/model.js';

const tasksSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  start_date: {type: Date, required: true},
  end_date: {type: Date, required: true},
  duration: {type: String, required: true},
  needsArtifact: {type:Boolean},
  acronym: {type: String, required: true},
  responsible: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'experimenter_roles',
    required: true
  },
  task_type: {
    type: mongoose.Types.ObjectId,
    ref: 'task_types',
    required: true
  },
  experiment: {
    type: mongoose.Types.ObjectId,
    ref: 'experiments',
    required: true
  }
}, {collection: 'tasks', timestamps: true});

export const tasks = mongoose.model('tasks', tasksSchema);

export default model(tasks);
