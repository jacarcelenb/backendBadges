import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

export const ROLES_REF = {
  admin: id('623fb1b764fd56550e229ed4'),
  experimenter: id('623fb1b764fd56550e229ed2')
};

export default [
  {_id: ROLES_REF.admin, name: 'Administrador', translation_key: 'roles_admin'},
  {_id: ROLES_REF.experimenter, name: 'Experimentador', translation_key: 'roles_experimenter'}
];
