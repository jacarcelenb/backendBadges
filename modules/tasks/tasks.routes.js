import tasksController from './tasks.controller.js';

export default [
  {
    path: '/tasks',
    method: 'get',
    private: true,
    handler: tasksController.tasks.find
  },
  {
    path: '/tasks_attached_artifacts',
    method: 'get',
    private: true,
    handler: tasksController.tasks_attached_artifacts
  },
  {
    path: '/num_task_artifact',
    method: 'get',
    private: true,
    handler: tasksController.count_tasks_attached_artifacts
  },
  {
    path: '/total_task',
    method: 'get',
    private: true,
    handler: tasksController.tasks.count
  },
  {
    path: '/tasks',
    method: 'put',
    private: true,
    handler: tasksController.tasks.update
  },
  {
    path: '/tasks',
    method: 'post',
    private: true,
    handler: tasksController.tasks.create
  },
  {
    path: '/tasks',
    method: 'delete',
    private: true,
    handler: tasksController.tasks_delete
  },
  {
    path: '/tasks_without_artifacts',
    method: 'delete',
    private: true,
    handler: tasksController.tasks.delete
  },
  {
    path: '/task_types',
    method: 'get',
    handler: tasksController.task_types.find
  }
];
