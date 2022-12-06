import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

export const ARTIFACT_TYPES_REF = {
  post: id('623fb1b764fd56550e229ed4'),
  poster: id('623fb1b764fd56550e229ed2'),
  presentation: id('623fb1b764fd56550e229ed5'),
  dataset: id('623fb1b764fd56550e229ed6'),
  image: id('623fb1b764fd56550e229ed7'),
  video: id('623fb1b764fd56550e229ed8'),
  audio: id('623fb1b764fd56550e229ed9'),
  software: id('623fb1b764fd56550e229eda'),
  lesson: id('623fb1b764fd56550e229edb'),
  object: id('623fb1b764fd56550e229edc'),
};

export default [
  {
    _id: ARTIFACT_TYPES_REF.post,
    name: 'Publicación',
    translation_key: 'artifact_type_post'
  },
  {
    _id: ARTIFACT_TYPES_REF.poster,
    name: 'Póster',
    translation_key: 'artifact_type_poster'
  },
  {
    _id: ARTIFACT_TYPES_REF.presentation,
    name: 'Presentación',
    translation_key: 'artifact_type_presentation'
  },
  {
    _id: ARTIFACT_TYPES_REF.dataset,
    name: 'Dataset',
    translation_key: 'artifact_type_dataset'
  },
  {
    _id: ARTIFACT_TYPES_REF.image,
    name: 'Imagen',
    translation_key: 'artifact_type_image'
  },
  {
    _id: ARTIFACT_TYPES_REF.video,
    name: 'Video',
    translation_key: 'artifact_type_video'
  },
  {
    _id: ARTIFACT_TYPES_REF.audio,
    name: 'Audio',
    translation_key: 'artifact_type_audio'
  },
  {
    _id: ARTIFACT_TYPES_REF.software,
    name: 'Software',
    translation_key: 'artifact_type_software'
  },
  {
    _id: ARTIFACT_TYPES_REF.lesson,
    name: 'Lección',
    translation_key: 'artifact_type_lesson'
  },
  {
    _id: ARTIFACT_TYPES_REF.object,
    name: 'Objeto',
    translation_key: 'artifact_type_object'
  },
 
];
