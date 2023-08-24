import { randomBytes } from 'node:crypto';

export const createParamHash = (hashSize = 4): string => {
  return randomBytes(Math.ceil(hashSize / 2))
    .toString('hex')
    .slice(0, hashSize);
};
