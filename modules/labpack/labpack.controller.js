import labpackModel from "./labpack.model.js";
import axios from "axios";
import fetch from "node-fetch";
import { FormData } from "formdata-node";
export default {
  labpack: labpackModel,
  uploadFile: async (body) => {
    let token = body.token;
    const base64Data = body.content;
    const base64Response = await fetch(
      `data:application/zip;base64,${base64Data}`
    );
    const file = await base64Response.blob();
    let form = new FormData();
    form.append("file", file, body.filename);
    let url = "";
    if (token.length > 0 && body.id_zenodo > 0) {
      url =
        "https://zenodo.org/api/deposit/depositions/" +
        body.id_zenodo +
        "/files?access_token=" +
        token;
    }
    const data = await axios
      .post(url, form)
      .then(function (response) {
        return response.data;
      })
      .catch(function (err) {
        return err;
      });
    return data;
  },
  createZenodoRepo: async (body) => {
    let tokenAPI = body.token;
    let url = "";
    if (tokenAPI.length > 0) {
      url =
        "https://zenodo.org/api/deposit/depositions?access_token=" + tokenAPI;
    }
    const { token, ...DataRepo } = body;
    const data = await axios
      .post(url, DataRepo)
      .then(function (response) {
        return response.data;
      })
      .catch(function (err) {
        console.log(err);
        return err;
      });
    return data;
  },
  updateZenodoRepo: async (body) => {
    let tokenAPI = body.token;
    let id_zenodoRepo = body.id_zenodo;
    let url = "";
    if (tokenAPI.length > 0) {
      url =
        "https://zenodo.org/api/deposit/depositions/" +
        id_zenodoRepo +
        "?access_token=" +
        tokenAPI;
    }
    const data = await axios
      .put(url, {
        metadata: body.metadata,
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (err) {
        console.log(err);
        return err;
      });
    return data;
  },
  publishZenodoRepo: async (body) => {
    let tokenAPI = body.token;
    let url = "";
    if (tokenAPI.length > 0 && body.id_zenodo > 0) {
      url =
        "https://zenodo.org/api/deposit/depositions/" +
        body.id_zenodo +
        "/actions/publish?access_token=" +
        tokenAPI;
    }
    const { token, ...DataRepo } = body;
    const repoData = {};

    const data = await axios
      .post(url, {})
      .then(function (response) {
        return response.data;
      })
      .catch(function (err) {
        return err;
      });
    return data;
  },
  DeleteFileZenodo: async (body) => {
    let tokenAPI = body.token;
    let url = "";
    if (tokenAPI.length > 0) {
      url = body.url + "?access_token=" + tokenAPI;
    }
    const data = await axios
      .delete(url, {})
      .then(function (response) {
        return response.data;
      })
      .catch(function (err) {
        return err;
      });
    return data;
  },

  NewVersionZenodo: async (body) => {
    let tokenAPI = body.token;
    let url = "";
    if (tokenAPI.length > 0 && body.id_zenodo > 0) {
      url =
        "https://zenodo.org/api/deposit/depositions/" +
        body.id_zenodo +
        "/actions/newversion?access_token=" +
        tokenAPI;
    }

    const metadata = body.metadata;
    const data = await axios
      .post(url, { metadata })
      .then(function (response) {
        return response.data;
      })
      .catch(function (err) {
        return err;
      });
    return data;
  },

  AllowEditZenodo: async (body) => {
    let tokenAPI = body.token;
    let url = "";
    if (tokenAPI.length > 0 && body.id_zenodo > 0) {
      url =
        "https://zenodo.org/api/deposit/depositions/" +
        body.id_zenodo +
        "/actions/edit?access_token=" +
        tokenAPI;
    }
    const data = await axios
      .post(url, {})
      .then(function (response) {
        return response.data;
      })
      .catch(function (err) {
        return err;
      });
    return data;
  },
};
