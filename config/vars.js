import 'dotenv/config';

export default {
  env: process.env.NODE_ENV,
  production: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET,
  resetToken: process.env.RESET_TOKEN,
  API_KEY: process.env.API_KEY,
  client_id: process.env.CLIENT_ID,
  client_secret:process.env.CLIENT_SECRET,
  databaseURL: process.env.DATABASE_URL || 'mongodb://localhost:27017/badgesGo'
};
