import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

export const EXPERIMENTER_ROLES_REF = {
  experimenter: id('623fb1b764fd56550e229ed2'),
  designer: id('623fb1b764fd56550e229ed4'),
  analyst: id('623fb1b764fd56550e229ed5'),
  formador: id('623fb1b764fd56550e229ed6'),
  monitor: id('623fb1b764fd56550e229ed7'),
  measurer: id('623fb1b764fd56550e229ed8')
};

export default [
  {
    _id: EXPERIMENTER_ROLES_REF.admin,
    name: 'Experimentador',
    translation_key: 'experimenter_role_experimenter'
  },
  {
    _id: EXPERIMENTER_ROLES_REF.designer,
    name: 'Diseñador',
    translation_key: 'experimenter_role_designer'
  },
  {
    _id: EXPERIMENTER_ROLES_REF.analyst,
    name: 'Analista',
    translation_key: 'experimenter_role_analyst'
  },
  {
    _id: EXPERIMENTER_ROLES_REF.formador,
    name: 'Formador',
    translation_key: 'experimenter_role_formador'
  },
  {
    _id: EXPERIMENTER_ROLES_REF.monitor,
    name: 'Monitor',
    translation_key: 'experimenter_role_monitor'
  },
  {
    _id: EXPERIMENTER_ROLES_REF.measurer,
    name: 'Medidor',
    translation_key: 'experimenter_role_measurer'
  }
];
