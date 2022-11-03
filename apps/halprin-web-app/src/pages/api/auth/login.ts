import { NextApiRequest, NextApiResponse } from 'next';
import createHandler from '../../../../middleware';
import User from '../../../../models/user';
import bcrypt from 'bcryptjs';
import checkAcces from '@/backend/auth/checkAcces';

import JWT from 'expo-jwt';

const handler = createHandler();

const checkDb = async (req: NextApiRequest) => {
  try {
    if (req.body.email && req.body.password) {
      //Check in db cd
      if ((await checkAcces(req.body.email, req.body.password)) === 'success') {
        const user = { email: req.body.email, password: req.body.password };
        const data = await User.findOne({ email: req.body.email });
        if (data) {
          return {
            code: 'success',
            payload: {
              user: data,
              token: JWT.encode({ user: user.email }, 'Halprin-Web-App'),
            },
          };
        } else {
          try {
            const passwordhash = await bcrypt.hash(user.password, 10);

            const newUser = new User({
              lang: 'en',
              email: user.email,
              password: passwordhash,
            });
            // Create new user
            const usercreated = await newUser.save();
            return {
              code: 'success',
              payload: {
                user: usercreated,
                token: JWT.encode({ user: user.email }, 'Halprin-Web-App'),
              },
            };
          } catch (err) {
            console.log(err);
            return { code: 'error', type: 'issue when saving user' };
          }
        }
      } else {
        return { code: 'error', type: 'unauthorized' };
      }
    } else {
      return { code: 'error', type: 'Missing credentials' };
    }
  } catch (err) {
    return { code: 'error', type: err };
  }
};

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.body.email) {
      const data = await User.findOne({ email: req.body.email });
      if (data) {
        bcrypt.compare(
          req.body.password,
          data.password,
          async (err, response) => {
            if (err) {
              const cdRequest = await checkDb(req);
              if (cdRequest && cdRequest.code === 'success') {
                res.status(200).send(cdRequest.payload);
              } else {
                res.status(401).send(false);
              }
            } else if (!response) {
              const cdRequest = await checkDb(req);
              if (cdRequest && cdRequest.code === 'success') {
                res.status(200).send(cdRequest.payload);
              } else {
                res.status(401).send(false);
              }
            } else {
              res.status(200).send({
                user: data,
                token: JWT.encode({ user: data.email }, 'Halprin-Web-App'),
              });
            }
          }
        );
      } else {
        const cdRequest = await checkDb(req);
        if (cdRequest && cdRequest.code === 'success') {
          res.status(200).send(cdRequest.payload);
        } else {
          res.status(401).send(false);
        }
      }
    } else {
      const cdRequest = await checkDb(req);
      if (cdRequest && cdRequest.code === 'success') {
        res.status(200).send(cdRequest.payload);
      } else {
        res.status(401).send(false);
      }
    }
  } catch {
    const cdRequest = await checkDb(req);
    if (cdRequest && cdRequest.code === 'success') {
      res.status(200).send(cdRequest.payload);
    } else {
      res.status(401).send(false);
    }
  }
});

export default handler;
