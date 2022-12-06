import artifactsController from './artifacts.controller.js';

export default [
  {
    path: '/artifacts',
    method: 'get',
    private: true,
    handler: artifactsController.artifacts.find
  },
  {
    path: '/artifacts',
    method: 'post',
    private: true,
    handler: artifactsController.artifacts.create
  },
  {
    path: '/artifacts',
    method: 'put',
    private: true,
    handler: artifactsController.artifacts.update
  },
  {
    path: '/artifacts',
    method: 'delete',
    private: true,
    handler: artifactsController.artifacts.delete
  },
  {
    path: '/artifacts_count',
    method: 'get',
    handler: artifactsController.artifacts.count
  },
  {
    path: '/artifact_classes',
    method: 'get',
    handler: artifactsController.artifactsClasses.find
  },
  {
    path: '/artifact_types',
    method: 'get',
    handler: artifactsController.artifactTypes.find
  },
  {
    path: '/artifact_purposes',
    method: 'get',
    handler: artifactsController.artifactPurposes.find
  },
  {
    path: '/artifact_order',
    method: 'get',
    handler: artifactsController.artifactOrder.find
  },
  {
    path: '/artifact_acm',
    method: 'get',
    handler: artifactsController.artifactAMC.find
  }
];
