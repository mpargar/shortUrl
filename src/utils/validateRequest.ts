import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  // console.log(req);
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    const mappedErrors = errors.mapped();
    console.log(mappedErrors);
    for (const key in mappedErrors) {
      mappedErrors[key] = mappedErrors?.[key]?.msg;
    }
    return res.status(400).json({ errors: mappedErrors });
  }
  return next();
};

export default validateRequest;