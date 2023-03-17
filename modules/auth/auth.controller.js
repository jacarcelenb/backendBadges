import usersModel from '../users/users.model.js';
import jsonwebtoken from '../../services/jsonwebtoken.service.js';
import vars from '../../config/vars.js'
import sgMail from '@sendgrid/mail'
import cryptService from '../../services/crypt.service.js';
sgMail.setApiKey(vars.API_KEY)
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
      email = "http://localhost:4200/changepassword/" + tokenReset

      const msg = {
        to: userEmail.email, // Change to your recipient
        from: 'carcelenjorge17@gmail.com', // Change to your verified sender
        subject: 'Recuperación de contraseña',
        templateId: 'd-ae1af7fa445f48a6977c0eac24cc0268',
        dynamicTemplateData: {
          emailVerification: email,
        }
      }
      await sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) => {
          console.error(error)
        })

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
};
