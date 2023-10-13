import mongoose from 'mongoose';
import model from '../core/model.js';

const credentialAccessSchema = new mongoose.Schema({
  user: {type: String, defaul: null},
  password: {type: String, defaul: null}
});

const evaluationSchema = new mongoose.Schema({
  time_complete_execution: {type: String, defaul: null},
  time_short_execution: {type: String, defaul: null},
  is_accessible: {type: Boolean, defaul: false}
});

const reproducedSchema = new mongoose.Schema({
  substantial_evidence_reproduced: {type: Boolean, defaul: false},
  respects_reproduction:{type: Boolean, defaul: false},
  tolerance_framework_reproduced: {type: Boolean, defaul: false},
});

const replicatedSchema = new mongoose.Schema({
  substantial_evidence_replicated: {type: Boolean, defaul: false},
  respects_replication:{type: Boolean, defaul: false},
  tolerance_framework_replicated: {type: Boolean, defaul: false},
});

const artifactsSchema = new mongoose.Schema({
  name: {type: String, required: true},
  file_content: {type: String, required: true},
  file_format: {type: String, required: true},
  file_size: {type: Number, required: true},
  file_url: {type: String, required: true},
  file_location_path: {type: String, required: true},
  credential_access: credentialAccessSchema,
  evaluation: evaluationSchema,
  reproduced: reproducedSchema,
  replicated: replicatedSchema,
  artifact_purpose: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'artifact_purposes',
    default: null
  },
  artifact_class: {
    type: mongoose.Types.ObjectId,
    ref: 'artifact_classes',
    default: null
  },
  artifact_type: {
    type: mongoose.Types.ObjectId,
    ref: 'artifact_types',
    default: null
  },
  artifact_acm: {
    type: mongoose.Types.ObjectId,
    ref: 'artifact_acm_types',
    default: null
  },
  sistematic_description_software: {
    type: String,
    default: null
  },
  sistematic_description_scripts: {
    type: String,
    default: null
  },
  maturity_level: {
    type: String,
    default: null
  },
  is_acm: {type: Boolean, default: false},
  executed_scripts: {type: Boolean , default: false},
  executed_software: {type: Boolean, default: false},
  data_manipulation: {type: Boolean,  default: false },
  norms_standards: {type: Boolean,  default: false },
  is_generated: {type: Boolean, default: false},
  task: {
    type: mongoose.Types.ObjectId,
    ref: 'tasks',
    default: null
  },
  experiment: {
    type: mongoose.Types.ObjectId,
    ref: 'experiments',
    required: true
  },
info:{
  type: Array,
}
}, {collection: 'artifacts', timestamps: true});

export const artifacts = mongoose.model('artifacts', artifactsSchema);

export default model(artifacts);
