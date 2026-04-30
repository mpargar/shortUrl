import { Schema } from "express-validator";

const VerifyUserSchema: Schema = {
  email: {
    in: "body",
    isEmail: true,
    optional: false,
    normalizeEmail: {
      options: {
        gmail_remove_dots: false,
      }
    },
    errorMessage: "Email es mandatorio y debe ser un email válido",
  },
  verificationCode: {
    in: "body",
    isString: true,
    optional: false,
    errorMessage: "El código de verificación es mandatorio y debe ser una cadena de texto",
  },
};

export default VerifyUserSchema;