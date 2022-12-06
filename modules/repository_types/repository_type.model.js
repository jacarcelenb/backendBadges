import mongoose from 'mongoose';
import model from '../core/model.js';

const RepositoryTypeSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    
}, {collection: 'repository'})

const repositories = mongoose.model('repository', RepositoryTypeSchema);


export default model(repositories);