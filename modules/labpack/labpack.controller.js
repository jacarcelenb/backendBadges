import labpackModel from "./labpack.model.js";
import axios from "axios";
import fetch from "node-fetch";
import { FormData } from "formdata-node";
export default {
  labpack: labpackModel,
  test: async function getRepos(param) {
    let url = `https://zenodo.org/api/deposit/depositions?access_token=UkO33J14iE8Svd4Ck4VvfT4BDuT25uwY0zwdRXiWIPHOr3iRJbegI7rc8Emh`;
    if (param.token.length > 0) {
      url =
        "https://zenodo.org/api/deposit/depositions?access_token=" +
        param.token;
    }
    const data = await axios
      .get(url)
      .then(function (response) {
        return { status: response.status, data: response.data };
      })
      .catch(function (err) {
        return err;
      });
    return data;
  },
  uploadFile: async (body) => {
    let token = body.token.token;
    const file = await fetch(body.url).then((response) => {
      return response.blob();
    });
    let form = new FormData();
    form.append("file", file, body.name);
    let url =
      "https://zenodo.org/api/deposit/depositions/" +
      body.id_zenodo +
      "/files?access_token=UkO33J14iE8Svd4Ck4VvfT4BDuT25uwY0zwdRXiWIPHOr3iRJbegI7rc8Emh";
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
    let tokenAPI = body.token.token;
    let url =
      "https://zenodo.org/api/deposit/depositions?access_token=UkO33J14iE8Svd4Ck4VvfT4BDuT25uwY0zwdRXiWIPHOr3iRJbegI7rc8Emh";
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
    console.log("Body")
    console.log(body);
    let tokenAPI = body.token;
    let id_zenodoRepo = body.id_zenodo;
    let url = "";
    if (tokenAPI.length > 0) {
      url =
        "https://zenodo.org/api/deposit/depositions/" +id_zenodoRepo +"?access_token="+tokenAPI;
    }
    const { token, ...DataRepo } = body;
    const { id_zenodo, ...DataUpdate } = DataRepo;
    const data = await axios
      .put(url, DataUpdate)
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

    let tokenAPI = body.token.token;
    let url =""
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
      .post(url, repoData)
      .then(function (response) {
        return response.data;
      })
      .catch(function (err) {
        return err;
      });
    return data;
  },
  testing: async (body) => {
    console.log(body);
  },
};
