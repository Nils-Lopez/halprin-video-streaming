import dbMiddleware from './mongodb';
import nextConnect from 'next-connect';

const createHandle = (...middlewares) => {
  return nextConnect().use(dbMiddleware, ...middlewares);
};

export default createHandle;
