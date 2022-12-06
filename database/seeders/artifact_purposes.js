import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

export const ARTIFACT_PURPOSES_REF = {
  survey: id('623fb1b764fd56550e229ed4'),
  script: id('623fb1b764fd56550e229ed2'),
  dataset: id('623fb1b764fd56550e229ed6'),
  speaker: id('623fb1b764fd56550e229ed5'),
  instruction: id('623fb1b764fd56550e229ed7'),
  requirement: id('623fb1b764fd56550e229ed8'),
  uml_model: id('623fb1b764fd56550e229ed9'),
};

export default [
  {
    _id: ARTIFACT_PURPOSES_REF.survey,
    name: 'Encuesta',
    translation_key: 'artifact_purpose_survey'
  },
  {
    _id: ARTIFACT_PURPOSES_REF.script,
    name: 'Script',
    translation_key: 'artifact_purpose_script'
  },
  {
    _id: ARTIFACT_PURPOSES_REF.dataset,
    name: 'Dataset',
    translation_key: 'artifact_purpose_dataset'
  },
  {
    _id: ARTIFACT_PURPOSES_REF.speaker,
    name: 'Charla',
    translation_key: 'artifact_purpose_speaker'
  },
  {
    _id: ARTIFACT_PURPOSES_REF.instruction,
    name: 'Instrucción',
    translation_key: 'artifact_purpose_instruction'
  },
  {
    _id: ARTIFACT_PURPOSES_REF.requirement,
    name: 'Requisito',
    translation_key: 'artifact_purpose_requirement'
  },
  {
    _id: ARTIFACT_PURPOSES_REF.uml_model,
    name: 'Modelo UML',
    translation_key: 'artifact_purpose_uml_model'
  },

];
