
export const requestLoginInformation = (userName, pass) => {
  return {
    type: 'REQUEST_LOGIN_INFORMATION',
    payload: { userName, pass }
  };
};

export default { requestLoginInformation };
