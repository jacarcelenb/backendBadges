import mongoose from 'mongoose';
import model from '../core/model.js';

const LabPackSchema = new mongoose.Schema({
    package_name:{
        type: String,
        required:true
    },
    package_doi:{
        type: String,
        required:true
    },
    experiment: {
        type: mongoose.Types.ObjectId,
        ref: 'experiments',
        required: true
    },
    package_type:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'package_type'
    },
    repository:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'repository'
    },
    package_description:{
        type: String,
        required:true
    }
    ,
    package_url:{
        type: String,
    }
    ,
    published:{
        type: Boolean,
    }
    ,
    submitedZenodo:{
        type: Boolean,
    } ,
    id_zenodo:{
        type: String,
    },
    tokenRepo:{
        type: String,
    }
    ,
    package_title:{
        type: String,
    }
}, {collection: 'labpack', timestamps: true})

const labpacks = mongoose.model('labpack', LabPackSchema);


export default model(labpacks);