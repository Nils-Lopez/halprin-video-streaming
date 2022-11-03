import axios from 'axios';

const checkAcces = async (email: string, password: string) => {
  const res = await axios.get(
    'https://contredanse.inthemaking.be/wp-json/checkuser/auth?email=' +
      email +
      '&password=' +
      password +
      '&product_id=4355;4354'
  );
  console.log('res : ', res);
  if (res.status) {
    return 'success';
  } else {
    return 'failure';
  }
};

export default checkAcces;
