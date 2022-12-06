import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

export const GROUP_TYPES_REF = {
  control: id('623fb1b764fd56550e229ed4'),
  experimental: id('623fb1b764fd56550e229ed2')
};

export default [
  {
    _id: GROUP_TYPES_REF.control,
    name: 'Control',
    translation_key: 'group_type_control'
  },
  {
    _id: GROUP_TYPES_REF.experimental,
    name: 'Experimental',
    translation_key: 'group_type_experimental'
  }
];
