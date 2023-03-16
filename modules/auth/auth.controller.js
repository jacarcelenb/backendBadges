import usersModel from '../users/users.model.js';
import jsonwebtoken from '../../services/jsonwebtoken.service.js';
import vars from '../../config/vars.js'
import sgMail from '@sendgrid/mail'
sgMail.setApiKey(vars.API_KEY)
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

      const msg = {
        to: userEmail.emailLink, // Change to your recipient
        from: 'carcelenjorge17@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      }
      sgMail
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


  }
};
