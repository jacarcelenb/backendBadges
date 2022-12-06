import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

export const PARTICIPANT_TYPE_REF = {
  student: id('623fb1b764fd56550e229ed4'),
  graduate: id('623fb1b764fd56550e229ed2'),
  professional: id('623fb1b764fd56550e229ed5')
};

export default [
  {
    _id: PARTICIPANT_TYPE_REF.student,
    name: 'Estudiante',
    translation_key: 'participant_type_student'
  },
  {
    _id: PARTICIPANT_TYPE_REF.graduate,
    name: 'Graduado',
    translation_key: 'participant_type_graduate'
  },
  {
    _id: PARTICIPANT_TYPE_REF.professional,
    name: 'Profesional',
    translation_key: 'participant_type_professional'
  }
];
