import mongoose from 'mongoose';
import cryptService from '../../services/crypt.service.js';
import {USER_PROFILES_REF} from './user_profiles.js';

const id = mongoose.Types.ObjectId;

export const USERS_REF = {
  admin: id('623fb1b764fd56550e229ed4'),
  experimenter: id('623fb1b764fd56550e229ed5')
};

const crypt = cryptService();

export default [
  {
    _id: USERS_REF.admin,
    identification: '1002003001',
    full_name: 'Marcelo Martinez',
    country: 'Ecuador',
    country_state: 'Pichincha',
    affiliation: 'Universidad de Los Andes',
    phone: '+593998989898',
    email: 'jmartinez@gmail.com',
    password: await crypt.encrypt('123456'),
    website: 'https://jmartinez.com',
    gender: 'male',
    status: 'active',
    profile: USER_PROFILES_REF.professional
  },
  {
    _id: USERS_REF.experimenter,
    identification: '2300874910',
    full_name: 'Yoshua Lopez',
    country: 'Ecuador',
    country_state: 'Pichincha',
    affiliation: 'Universidad de las Americas',
    phone: '+593982195208',
    email: 'me@yoshualopez.com',
    password: await crypt.encrypt('123456'),
    website: 'https://yoshualopez.com',
    gender: 'male',
    status: 'active',
    profile: USER_PROFILES_REF.professional
  }
];
