import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

export const STANDARD_PROPERTIES_REF = {
  documented: id('623fb1b764fd56550e229ed4'),
  complete: id('623fb1b764fd56550e229ed2'),
  coherent: id('623fb1b764fd56550e229ed5'),
  exercisable: id('623fb1b764fd56550e229ed6'),
  available: id('623fb1b764fd56550e229ed7'),
  accessible: id('623fb1b764fd56550e229ed8'),
  good_structured: id('623fb1b764fd56550e229ed9'),
  ethical: id('623fb1b764fd56550e229eda')
};

export default [
  {
    _id: STANDARD_PROPERTIES_REF.documented,
    name: 'Documentado',
    translation_key: 'standard_property_documented'
  },
  {
    _id: STANDARD_PROPERTIES_REF.complete,
    name: 'Completo',
    translation_key: 'standard_property_complete'
  },
  {
    _id: STANDARD_PROPERTIES_REF.coherent,
    name: 'Coherente',
    translation_key: 'standard_property_coherent'
  },
  {
    _id: STANDARD_PROPERTIES_REF.exercisable,
    name: 'Ejercitable',
    translation_key: 'standard_property_exercisable'
  },
  {
    _id: STANDARD_PROPERTIES_REF.available,
    name: 'Disponible',
    translation_key: 'standard_property_available'
  },
  {
    _id: STANDARD_PROPERTIES_REF.accessible,
    name: 'Accesible',
    translation_key: 'standard_property_accessible'
  },
  {
    _id: STANDARD_PROPERTIES_REF.good_structured,
    name: 'Bien estructurado',
    translation_key: 'standard_property_good_structured'
  },
  {
    _id: STANDARD_PROPERTIES_REF.ethical,
    name: 'Ético',
    translation_key: 'standard_property_ethical'
  }
];
