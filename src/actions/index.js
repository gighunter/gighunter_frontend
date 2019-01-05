
export const requestLoginInformation = async (userName, pass) => {

  return {
    type: 'REQUEST_LOGIN_INFORMATION_SUCCESS',
    payload: mockData
  };
};

export const sendSignUpInformation = (userName, pass) => {
  return {
    type: 'SEND_SIGNUP_INFORMATION_SUCCESS',
    payload: { userName, pass }
  };
};


export default {
  requestLoginInformation,
  sendSignUpInformation
};
