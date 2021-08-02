import { NextApiRequest, NextApiResponse } from 'next';
import { sayHello } from '@contredanse/common';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  return res.send(sayHello('world loaded from /api/hello'));
}
