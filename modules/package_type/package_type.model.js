import mongoose from 'mongoose';
import model from '../core/model.js';

const PackageTypeSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    eng_name:{
        type: String
    },
    
}, {collection: 'package_type'})

const repositories = mongoose.model('package_type', PackageTypeSchema);


export default model(repositories);