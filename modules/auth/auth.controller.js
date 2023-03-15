import usersModel from '../users/users.model.js';
import jsonwebtoken from '../../services/jsonwebtoken.service.js';
import vars from '../../config/vars.js'
import sgMail from "@sendgrid/mail"
sgMail.setApiKey(vars.sendGridAPI)
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
      emailVerification = "http://localhost:4200/change-newpassword/" + tokenReset
      const message = {
        to: "carcelenjorge17@gmail.com",
        from: "carcelenjorge17@gmail.com",
        subject: "Recuperación de contraseña",
        text: "El siguiente correo va a permitir que pueda cambiar su clave",
        html: `<a href="${{emailVerification}}">Cambiar clave</a>`
      }

      sgMail.send(message)

      userEmail.resetPassword = tokenReset
      await usersModel.update(userEmail._id, userEmail)
      return { tokenReset }
    }


  }
};
