import usersModel from '../users/users.model.js';
import jsonwebtoken from '../../services/jsonwebtoken.service.js';
import vars from '../../config/vars.js'
import Sib from 'sib-api-v3-sdk'
const client = Sib.ApiClient.instance

const apiKey = client.authentications['api-key']
apiKey.apiKey = vars.API_KEY

const tranEmailApi = new Sib.TransactionalEmailsApi()
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

    return { token, user };
  },
  forgotPassword: async (body) => {
    let emailVerification = ""
    const user = await usersModel.SignWithEmail(
      body.emailLink
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
      emailVerification = "http://localhost:4200/change-newpassword/" + tokenReset


      const sender = {
        email: "carcelenjorge17@gmail.com"
      }

      const receivers = [
        {
          email: userEmail.emailLink,
        }
      ]

      await tranEmailApi.sendTransacEmail({
        sender,
        to: receivers,
        subject: "Recuperación de contraseña para la plataforma",
        textContent: "Si olvidaste tu nombre de usuario o contraseña, o no puedes recibir códigos de verificación, sigue estos pasos para recuperar tu Cuenta . De esta manera, podrás usar servicios.",
        htmlContent:`<!DOCTYPE html>
        <html>
        <head>
        <style>
        a:link, a:visited {
          background-color: #f44336;
          color: white;
          padding: 14px 25px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
        }

        a:hover, a:active {
          background-color: red;
        }
        </style>
        </head>
        <body>

        <h2>Link Button</h2>

        <p>A link styled as a button:</p>
        <a href="{{params.email}}" target="_blank">This is a link</a>

        </body>
        </html>`,
        params:{
          email: emailVerification
        }

      })
      userEmail.resetPassword = tokenReset
      // await usersModel.update(userEmail._id, userEmail)
      return { tokenReset }
    }


  }
};
