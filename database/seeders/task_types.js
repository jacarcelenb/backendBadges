import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

export const TASK_TYPE_REF = {
  formacion: id('623fb1b764fd56550e229ed4'),
  experimental: id('623fb1b764fd56550e229ed2'),
  analysis: id('623fb1b764fd56550e229ed5')
};

export default [
  {
    _id: TASK_TYPE_REF.formacion,
    name: 'Formación',
    translation_key: 'task_type_formacion'
  },
  {
    _id: TASK_TYPE_REF.experimental,
    name: 'Experimental',
    translation_key: 'task_type_experimental'
  },
  {
    _id: TASK_TYPE_REF.analysis,
    name: 'Análisis',
    translation_key: 'task_type_analysis'
  }
];
