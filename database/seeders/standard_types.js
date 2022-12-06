import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

export const STANDARD_TYPES_REF = {
  required: id('623fb1b764fd56550e229ed4'),
  optional: id('623fb1b764fd56550e229ed2')
};

export default [
  {
    _id: STANDARD_TYPES_REF.required,
    name: 'required',
    translation_key: 'artifact_purposes_required'
  },
  {
    _id: STANDARD_TYPES_REF.optional,
    name: 'optional',
    translation_key: 'artifact_purposes_optional'
  }
];
