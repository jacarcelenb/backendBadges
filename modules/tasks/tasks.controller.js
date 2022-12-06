import __ from 'underscore';
import tasksModel from './tasks.model.js';
import artifactsModel from '../artifacts/artifacts.model.js';
import taskTypesModel from './task_types.model.js';

export default {
  tasks: tasksModel,
  task_types: taskTypesModel,
  tasks_attached_artifacts: async (filter, params) => {
    const tasks = await tasksModel.find(filter, params);
    const artifacts = await artifactsModel.find({
      task: {$in: tasks.map((task) => task._id)}
    });

    const artifacts_by_task = __(artifacts).groupBy('task');

    tasks.forEach((task) => {
      task.artifacts = artifacts_by_task[task._id] || [];
    });

    return tasks;
  },
  count_tasks_attached_artifacts: async (filter, params) => {
    const tasks = await tasksModel.find(filter, params);
    const artifacts = await artifactsModel.find({
      task: {$in: tasks.map((task) => task._id)}
    });

    const artifacts_by_task = __(artifacts).groupBy('task');

    tasks.forEach((task) => {
      task.artifacts = artifacts_by_task[task._id] || [];
    });

    return tasks.length;
  },
  tasks_delete: async (filter, params) => {
    const tasks = await tasksModel.find(filter, params);
    const artifacts = await artifactsModel.find({
      task: {$in: tasks.map((task) => task._id)}
    });

    await artifactsModel.delete({
      _id: {$in: artifacts.map((artifact) => artifact._id)}
    });

    return tasksModel.delete(filter, params);
  }
};
