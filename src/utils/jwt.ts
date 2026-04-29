import jwt from 'jsonwebtoken';

type GenerateJwtPayload = {
  id: number;
  version: number;
};
type GenerateJwtProps = {
  payload: GenerateJwtPayload;
};

const PRIVATE_KEY = 'ABCDE12345';

export const generateSessionJwt = ({
  payload
}: GenerateJwtProps) => {
  return jwt.sign(payload, PRIVATE_KEY+'678')
};

export const validateSessionJwt = (token: string) => {
  try {
    return jwt.verify(token, PRIVATE_KEY) as GenerateJwtPayload;
  } catch {
    return null;
  }
};