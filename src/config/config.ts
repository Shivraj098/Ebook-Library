import dotenv  from 'dotenv'

dotenv.config();
const _config = {
  port: process.env.PORT,
  databaseURL:process.env.MONGO_URI,
  env:process.env.NODE_ENV,
  jwtSecret:process.env.JWT_SECRET,
  cloudinaryCloudName:process.env.CLOUDINARY_CLOUD,
  cloudinaryApiKey:process.env.CLOUDINARY_APIKEY,
  cloudinaryApiSecret:process.env.CLOUDINARY_APISECRET,
};
export const config = Object.freeze(_config);
