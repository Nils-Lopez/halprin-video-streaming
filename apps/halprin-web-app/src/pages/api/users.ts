import { NextApiRequest, NextApiResponse } from 'next';
import createHandler from '../../../middleware';
import User from '../../../models/user';
import bcrypt from 'bcryptjs';
import checkAcces from '@/backend/auth/checkAcces';

const handler = createHandler();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const users = await User.find();
    if (users) {
      res.status(200).send(users);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { lang, email, password } = req.body;
  if (lang && email && password) {
    try {
      if ((await checkAcces(email, password)) === 'success') {
        // Hash password to store it in DB
        const passwordhash = await bcrypt.hash(password, 10);

        const user = new User({
          lang,
          email,
          password: passwordhash,
        });
        // Create new user
        const usercreated = await user.save();
        return res.status(200).send(usercreated);
      } else {
        return res.status(500).send('No access');
      }
    } catch (error: any) {
      return res.status(500).send(error.message);
    }
  } else {
    res.status(422).send('data_incomplete');
  }
});

handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.body.playlist) {
      const user = await User.findOne({ email: req.body.email });
      switch (req.body.playlist) {
        case 'fav':
          user.favMedia.push(req.body.media);
          const createdUserFav = await user.save();
          return res.status(200).send(createdUserFav);
        case 'seen':
          user.seenMedia.push(req.body.media);
          const createdUserSeen = await user.save();
          return res.status(200).send(createdUserSeen);
        default:
          console.log('error in playlist name');
          return res.status(400).send('Error in the playlist name');
      }
    }
  } catch (err) {
    console.log(err);
  }
});

// const handler = async (
//     req: NextApiRequest,
//     res: NextApiResponse
// ) => {
//     if (req.method === 'POST') {
//         // Check if name, email or password is provided
//         const { lang, email, password } = req.body;
//         if (lang && email && password) {
//             try {
//                 if (checkAcces(email) === "success") {
//                     // Hash password to store it in DB
//                     var passwordhash = await bcrypt.hash(password, 10);

//                     var user = new User({
//                         lang,
//                         email,
//                         password: passwordhash
//                     });
//                     // Create new user
//                     var usercreated = await user.save();
//                     return res.status(200).send(usercreated);
//                 } else {
//                     return res.status(500).send("No access")
//                 }
//             } catch (error: any) {
//                 return res.status(500).send(error.message);
//             }
//         } else {
//             res.status(422).send('data_incomplete');
//         }
//     } else if (req.method === "GET") {
//         try {
//             var users = await User.find();
//             return res.status(200).send(users);
//         } catch (error: any) {
//             res.status(500).send(error.message)
//         }
//     }
//     else {
//         res.status(422).send('req_method_not_supported');
//     }
// };

export default handler;
