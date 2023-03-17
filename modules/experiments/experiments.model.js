import mongoose from 'mongoose';
import model from '../core/model.js';

const gqm_objective_schema = new mongoose.Schema({
  objective_analyze: {
    type: String,
    default:"No se registra"
  },
  with_purpose: {
    type: String,
    default:"No se registra"
  },
  with_respect_that: {
    type: String,
    default:"No se registra"
  },
  with_viewpoint: {
    type: String,
    default:"No se registra"
  },
  in_the_context_of: {
    type: String,
    default:"No se registra"
  }
});

const experimentsSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    default: () => {
      return Math.
      random().
      toString(36).
      substring(7);
    }
  },
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    default: "No se registra"
  },
  country_state: {
    type: String,
    default: "No se registra"
  },
  objective: {
    type: String,
    default: null
  },
  gqm_objective: {
    type: gqm_objective_schema,
    default: null
  },
  doi_code: {
    type: String,
    default: null
  },
  description: {
    type: String,
    required: true,
    default: null
  },
  created_date: {
    type: Date,
    required: true
  },
  reason: {
    type: String,
    default: "No se registra"
  },
  has_scripts: {type: Boolean, required: true, default: false},
  has_software: {type: Boolean, required: true, default: false},
  has_source_code: {type: Boolean, required: true, default: false},
  completed: {type: Boolean,  default: false}
}, {collection: 'experiments', timestamps: true});

const experiments = mongoose.model('experiments', experimentsSchema);

export default model(experiments);
