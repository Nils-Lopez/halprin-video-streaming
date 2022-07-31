import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../../models/user';
import createHandler from '../../../../middleware';

const handler = createHandler();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { userEmail } = req.query;
    const user = await User.findOne({ email: userEmail });
    if (user) {
      res.status(200).send(user);
    }
  } catch (err) {
    console.log(err);
    res.status(401).send(err);
  }
});

export default handler;
