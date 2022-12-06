import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

export const ARTIFACT_CLASSES_REF = {
  entry: id('623fb1b764fd56550e229ed6'),
  exit: id('623fb1b764fd56550e229ed7')
};

export default [
  {
    _id: ARTIFACT_CLASSES_REF.entry,
    name: 'Entrada',
    translation_key: 'artifact_class_entry'
  },
  {
    _id: ARTIFACT_CLASSES_REF.exit,
    name: 'Salida',
    translation_key: 'artifact_class_exit'
  }
];
