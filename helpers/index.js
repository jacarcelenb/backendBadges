import fs from 'fs';
import fs_path, {dirname} from 'path';
import micromatch from 'micromatch';
import {fileURLToPath} from 'url';

const walk = (directory, pattern = '', filepaths = []) => {
  // eslint-disable-next-line no-sync
  const files = fs.readdirSync(directory);
  for (const filename of files) {
    const filepath = fs_path.join(directory, filename);
    // eslint-disable-next-line no-sync
    if (fs.statSync(filepath).isDirectory()) {
      walk(filepath, pattern, filepaths);
    } else if (micromatch.isMatch(filename, pattern)) {
      filepaths.push(filepath);
    }
  }

  return filepaths;
};

const composeQuery = (query = {}) => {
  const filter = {};
  const options = {};

  Object.keys(query).forEach((key) => {
    if (key.startsWith('___')) {
      options[key.replace('___', '')] = query[key];
    } else {
      filter[key] = query[key];
    }
  });

  return {filter, options};
};

export class CustomError extends Error {
  constructor (message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
  }
}

const getDirname = (url_path) => {
  return dirname(fileURLToPath(url_path));
};

export default {
  walk,
  getDirname,
  composeQuery
};
