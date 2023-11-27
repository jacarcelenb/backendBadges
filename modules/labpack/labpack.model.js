import mongoose from "mongoose";
import model from "../core/model.js";

const LabPackSchema = new mongoose.Schema(
  {
    package_name: {
      type: String,
      required: true,
    },
    package_doi: {
      type: String,
    },
    experiment: {
      type: mongoose.Types.ObjectId,
      ref: "experiments",
      required: true,
    },
    package_type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "package_type",
    },
    repository: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "repository",
    },
    package_description: {
      type: String,
      required: true,
    },
    package_url: {
      type: String,
    },
    publishedZenodo:{
      type: Boolean,
    },
    submitted:{
      type: Boolean,
    },
    idDeposition: {
      type: String,
    },
  },
  { collection: "labpack", timestamps: true }
);

const labpacks = mongoose.model("labpack", LabPackSchema);

export default model(labpacks);
