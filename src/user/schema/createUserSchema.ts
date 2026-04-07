import { Schema } from "express-validator";

const CreateUserSchema: Schema = {
  id: {
    in: "body",
    isInt: true,
    toInt: true,
    optional: false,
    errorMessage: "ID es mandatorio y debe ser un número entero",
  },
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
  password: {
    in: "body",
    isLength: {
      options: { 
        min: 8 
      },
    },
    optional: false,
    errorMessage: "Password es mandatorio y debe tener al menos 8 caracteres",
  },
  name: {
    in: "body",
    isString: true,
    optional: false,
    errorMessage: "Name es mandatorio y debe ser una cadena de texto",
  }
};

export default CreateUserSchema;