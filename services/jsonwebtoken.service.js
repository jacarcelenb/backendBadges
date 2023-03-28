import vars from '../config/vars.js';
import jwt from 'jsonwebtoken';

const jsonwebtoken = () => {
  const secret = vars.jwtSecret;
  const resettoken= vars.resetToken

  return {
    sign: (payload = {}) => {
      return jwt.sign(payload, secret, {
        expiresIn: '30 days',
        algorithm: 'HS256'
      });
    },
    decode: (token) => {
      return jwt.verify(token, secret);
    },
     resetPassword:(payload = {}) => {
      return jwt.sign(payload, resettoken, {
        expiresIn: '900000ms',
        algorithm: 'HS256'
      });
    },
    verifyTokenReset:(token) => {
      return jwt.verify(token, resettoken);
    },

  };
};

export default jsonwebtoken;
