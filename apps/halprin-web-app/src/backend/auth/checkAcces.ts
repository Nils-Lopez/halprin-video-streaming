const checkAcces = (email: string) => {
  if (email[0] === '1') {
    return 'success';
  } else {
    return 'failure';
  }
};

export default checkAcces;
