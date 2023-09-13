import usersModel from "../users/users.model.js";
import jsonwebtoken from "../../services/jsonwebtoken.service.js";
import vars from "../../config/vars.js";
import cryptService from "../../services/crypt.service.js";
import users_crud from "../users/users.model.js";
import axios from "axios";
const jwt = jsonwebtoken();
const crypt = cryptService();

export default {
  login: async (body) => {
    const data = await users_crud.find({email:body.email});
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
    let url = "https://updateuser.onrender.com/users"
    const userdata = {
      email: body.email.trim(),
      newemail: body.newemail.trim()
    }
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
};
