import usersModel from '../users/users.model.js';
import jsonwebtoken from '../../services/jsonwebtoken.service.js';

const jwt = jsonwebtoken();

export default {
  login: async (body) => {
    const data = await usersModel.comparePassword(
      body.email,
      body.password
    );

    const user = data[0];

    const token = jwt.sign({
      user: user._id
    });

    return {token, user};
  }
};
