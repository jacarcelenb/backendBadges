import usersModel from '../users/users.model.js';
import jsonwebtoken from '../../services/jsonwebtoken.service.js';
import vars from '../../config/vars.js'
import SibApiV3Sdk from "sib-api-v3-sdk"
const client = SibApiV3Sdk.ApiClient.instance
const apiKey = client.authentications['api-key']
apiKey.apiKey = process.env.APIKEY_SENDMAIL
import cryptService from '../../services/crypt.service.js';

const jwt = jsonwebtoken();
const crypt = cryptService();

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

    return { token, user };
  },
  forgotPassword: async (body) => {
    let email = ""
    const user = await usersModel.SignWithEmail(
      body.email
    );
    const userEmail = user[0]

    if (userEmail.length == 0) {
      return "Correo electronico no encontrado"
    } else {
      // enviar el email con el token y actualizar el modelo del usuario para guardar
      // el token
      const tokenReset = jwt.resetPassword({
        user: userEmail._id
      });

      // send Email
      email = "https://badge-go-project.netlify.app/changepassword/" + tokenReset


      await new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail(
        {
          'subject':'Cambio de clave',
          'sender' : {'email':'carcelenjorge17@gmail.com', 'name':'BadgeGO'},
          'to' : [{'name': userEmail.full_name, 'email': userEmail.email}],
           'templateId':3,
          'params' : {'emailVerification':email}
        }
      ).then(function(data) {
        console.log(data);
      }, function(error) {
        console.log(error);
      });

      userEmail.resetPassword = tokenReset
      await usersModel.update(userEmail._id, userEmail)
      return { tokenReset }
    }


  }, changeForgotPassword: async (body) => {
    // obtener el token que viene del body
    console.log(body)
    const token = body.token
    const password = body.password
    const checkResetToken = jwt.verifyTokenReset(token)

    if (checkResetToken) {
      const foundUser = await usersModel.find({resetPassword:token})
      const user = foundUser[0]
      console.log(user)
      console.log(user._id)
      // encriptar la nueva contraseña
      user.password = await crypt.encrypt(password)
      // actualizar la nueva contraseña del usuario
      await usersModel.update(user._id, user)

    } else {
      console.log("Invalid Token")
    }

    return 'OK';
  },
  validateEmail: async (body) => {
    const data = await usersModel.ValidateEmail(
      body.email
    );

    const user = data

    return { user };
  },
};
