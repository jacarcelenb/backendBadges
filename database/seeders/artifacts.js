import mongoose from 'mongoose';
import {ARTIFACT_CLASSES_REF} from './artifact_classes.js';
import {ARTIFACT_TYPES_REF} from './artifact_types.js';
import {ARTIFACT_PURPOSES_REF} from './artifact_purposes.js';
import {EXPERIMENTS_REF} from './experiments.js';
import {TASKS_REF} from './tasks.js';

const id = mongoose.Types.ObjectId;

export const ARTIFACTS_REF = {
  artifact_1: id('623fb1b764fd56550e229ed6'),
  artifact_2: id('623fb1b764fd56550e229ed7'),
  artifact_with_task: id('623fb1b764fd56550e229ed8'),
  readme_artifact: id('623fb1b764fd56550e229ed8')
};

export default [
  {
    _id: ARTIFACTS_REF.artifact_1,
    name: 'Artifact 1',
    file_content: 'This is the content of the artifact 1',
    file_format: 'pdf',
    file_size: 1500,
    file_url: 'http://localhost:3000/artifacts/artifact_1.pdf',
    file_location_path: 'artifacts/artifact_1.pdf',
    credential_access: null,
    evaluation: {
      time_complete_execution: '10:00:00',
      time_short_execution: '5:00:00',
      is_accessible: true
    },
    artifact_purpose: ARTIFACT_PURPOSES_REF.instruction,
    artifact_class: ARTIFACT_CLASSES_REF.entry,
    artifact_type: ARTIFACT_TYPES_REF.lesson,
    sistematic_description_software: null,
    sistematic_description_scripts: "Scripts created using python",
    maturity_level:"Procedural",
    executed_scripts: true,
    executed_software: false,
    data_manipulation:true,
    task: null,
    experiment: EXPERIMENTS_REF.experiment_1
  },
  {
    _id: ARTIFACTS_REF.artifact_with_task,
    name: 'Artifact with task',
    file_content: 'This is the content of the artifact with task',
    file_format: 'pdf',
    file_size: 1500,
    file_url: 'http://localhost:3000/artifacts/artifact_with_task.pdf',
    file_location_path: 'artifacts/artifact_with_task.pdf',
    credential_access: {
      user: 'user',
      password: 'password'
    },
    evaluation: {
      time_complete_execution: '10:00:00',
      time_short_execution: '5:00:00',
      is_accessible: true
    },
    artifact_purpose: ARTIFACT_PURPOSES_REF.instruction,
    artifact_class: ARTIFACT_CLASSES_REF.entry,
    artifact_type: ARTIFACT_TYPES_REF.lesson,
    sistematic_description_software: null,
    sistematic_description_scripts: "Scripts created using js",
    maturity_level:"Procedural",
    executed_scripts: true,
    executed_software: false,
    data_manipulation:true,
    task: TASKS_REF.task_with_artifacts,
    experiment: EXPERIMENTS_REF.experiment_1
  }
];
