/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import AuthContext from './context/AuthContext';

const APP: React.FC = () => (
  <>
  <AuthContext.Provider value={{ name: 'Sergio' }}>
    <SignIn />
  </AuthContext.Provider>
  <GlobalStyle />
  </>
);
export default APP;
