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
        htmlContent: `<!DOCTYPE html>
        <html>
        <head>
        <style>
        a {
          background-color: royalblue;
          color: white;
          padding: 14px 25px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-family:Arial
        }

        a:hover {
          background-color: blue;
           color: white;
          padding: 14px 25px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
        }
        p {
        font-family:Arial;
        }

        div {
           background-color:#f2f2f2;
           text-align: center;
           padding-top:5px;
           padding-bottom:30px;
           border-radius: 1cm;
        }

        h2 {
         font-family:Arial;
        }


        </style>
        </head>
        <body>

        <div>
           <h2>Estimado usuario:</h2>


        <p>Por favor haga clic en el siguiente enlace para cambiar su contraseña</p>


        <a href="{{params.email}}" target="_blank">&#128512; Recuperar contraseña</a>
        </div>



        </body>
        </html>`,
        params: {
          email: emailVerification,
          image: "https://res.cloudinary.com/utn-csoft/image/upload/v1678931181/badgeGo-icon_kcs0by.svg"
        }

      })
      userEmail.resetPassword = tokenReset
      // await usersModel.update(userEmail._id, userEmail)
      return { tokenReset }
    }


  }
};
