import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

export const USER_PROFILES_REF = {
  student: id('623fb1b764fd56550e229ed2'),
  degree: id('623fb1b764fd56550e229ed4'),
  professional: id('623fb1b764fd56550e229ed5')
};

export default [
  {
    _id: USER_PROFILES_REF.student,
    name: 'Estudiante',
    translation_key: 'user_profile_student'
  },
  {
    _id: USER_PROFILES_REF.degree,
    name: 'Graduado',
    translation_key: 'user_profile_degree'
  },
  {
    _id: USER_PROFILES_REF.professional,
    name: 'Profesional',
    translation_key: 'user_profile_professional'
  }
];
