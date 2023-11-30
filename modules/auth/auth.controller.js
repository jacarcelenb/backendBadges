import usersModel from "../users/users.model.js";
import jsonwebtoken from "../../services/jsonwebtoken.service.js";
import vars from "../../config/vars.js";
import cryptService from "../../services/crypt.service.js";
import users_crud from "../users/users.model.js";
import axios from "axios";
import fetch from "node-fetch";
const jwt = jsonwebtoken();
const crypt = cryptService();

export default {
  login: async (body) => {
    const data = await users_crud.find({ email: body.email });
    const user = data[0];
    const token = jwt.sign({
      user: user._id,
    });
    const logged = body.email == user.email;
    if (logged) {
      return { token, user };
    } else {
      return { message: "User not found", status: 404 };
    }
  },
  validateEmail: async (body) => {
    const data = await usersModel.ValidateEmail(body.email);

    const user = data;

    return { user };
  },
  updateUserEmail: async (body) => {
    let url = "https://updateuser.onrender.com/users";
    const userdata = {
      email: body.email.trim(),
      newemail: body.newemail.trim(),
    };
    const data = await axios
      .post(url, userdata)
      .then(function (response) {
        return response.data;
      })
      .catch(function (err) {
        return err;
      });
    return data;
  },

  GetTokenGithub: async (body) => {
    let url = "https://github.com/login/oauth/access_token";
    const data = await axios
      .post(url, {
        client_id: vars.client_id,
        client_secret: vars.client_secret,
        code: body.code,
      })
      .then(function (response) {
        let token = response.data.split("&");
        return token[0].split("access_token=")[1];
      })
      .catch(function (err) {
        return err;
      });
    return data;
  },

  getRepoUser: async (body) => {
    let url = " https://api.github.com/user";
    const data = await axios
      .get(url, { headers: { Authorization: `Bearer ${body.token}` } })
      .then(function (response) {
        return response.data;
      })
      .catch(function (err) {
        return err;
      });
    return data;
  },
  CreateGithubRepository: async (body) => {
    let url = "https://api.github.com/user/repos";
    const data = await axios
      .post(
        url,
        {
          name: body.name,
          description: body.description,
          private: false,
          is_template: false,
        },
        { headers: { Authorization: `Bearer ${body.token}` } }
      )
      .then(function (response) {
        return response.data;
      })
      .catch(function (err) {
        return err;
      });
    return data;
  },

  UploadFileRepository: async (body) => {
    let url = body.url + "/contents/" + body.filename;
    const data = await axios
      .put(
        url,
        {
          message: body.message,
          content: body.file,
        },
        { headers: { Authorization: `Bearer ${body.token}` } }
      )
      .then(function (response) {
        return response.data;
      })
      .catch(function (err) {
        return err;
      });

    return data;
  },

  DeleteFileRepository: async (body) => {
    let url = body.url + "/contents/" + body.filename;
    const data = await axios
      .delete(url, {
        data: { message: body.message, sha: body.sha },
        headers: { Authorization: `Bearer ${body.token}` },
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (err) {
        return err;
      });

    return data;
  },

  UpdateRepository: async (body) => {
    let url = body.url;
    const data = await axios
      .patch(
        url,
        { name: body.name, description: body.description },
        { headers: { Authorization: `Bearer ${body.token}` } }
      )
      .then(function (response) {
        return response.data;
      })
      .catch(function (err) {
        return err;
      });
    return data;
  },

  DeleteRepository: async (body) => {
    let url = body.url
    const data = await axios
      .delete(url, {
        data: {},
        headers: { Authorization: `Bearer ${body.token}` },
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (err) {
        return err;
      });
    return data;
  },
};
