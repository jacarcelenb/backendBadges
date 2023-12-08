import labpackController from './labpack.controller.js';

export default [
  {
    path: '/labpack',
    method: 'get',
    private: true,
    handler: labpackController.labpack.find
  },
  {
    path: '/labpackTest',
    method: 'get',
    handler: labpackController.test
  },
  {
    path: '/labpackUpload',
    method: 'post',
    private: true,
    handler: labpackController.uploadFile
  }
  ,
  {
    path: '/labpackCreateRepo',
    method: 'post',
    private: true,
    handler: labpackController.createZenodoRepo
  }
  ,
  {
    path: '/labpackPublishRepo',
    method: 'post',
    private: true,
    handler: labpackController.publishZenodoRepo
  },
  {
    path: '/labpack',
    method: 'post',
    private: true,
    handler: labpackController.labpack.create
  },
  {
    path: '/labpack',
    method: 'put',
    private: true,
    handler: labpackController.labpack.update
  },
  {
    path: '/updateRepo',
    method: 'post',
    private:false,
    handler: labpackController.updateZenodoRepo
  }
  ,
  {
    path: '/newVersion',
    method: 'post',
    private:false,
    handler: labpackController.NewVersionZenodo
  }
  ,
  {
    path: '/deleteFileRepo',
    method: 'post',
    private:false,
    handler: labpackController.DeleteFileZenodo
  },
  {
    path: '/allowEditRepo',
    method: 'post',
    private:false,
    handler: labpackController.AllowEditZenodo
  },
   {
    path: '/labpacks',
    method: 'delete',
    private: true,
    handler: labpackController.labpack.delete
  }
];
