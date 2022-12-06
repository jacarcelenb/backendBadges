import helpers from '../helpers/index.js';

import path, {dirname} from 'path';
import {fileURLToPath, pathToFileURL} from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const models_map = await read_all_models();
const models = models_map_to_obj(models_map);

export default models;

function models_map_to_obj (_models_map = []) {
  const models_obj = {};

  _models_map.forEach((model_map) => {
    const {model, collection} = model_map;
    models_obj[collection] = model;
  });

  return models_obj;
}

function read_all_models () {
  const models_path = helpers.walk(
    path.resolve(__dirname),
    '*.model.js'
  );

  const models_map_promises = models_path.map(async (model_path) => {
    const model_module = await import(pathToFileURL(model_path));
    const model = model_module.default.model;
    const collection = model.collection.name;
  
    return {model, collection};
  });

  return Promise.all(models_map_promises);
}
