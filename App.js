import React from 'react';

import {AuthContextProvider} from './src/context/AuthContext';
import AppNav from './src/navigation/AppNav';

const App = () => {
  return (
    <AuthContextProvider>
      <AppNav />
    </AuthContextProvider>
  );
};

export default App;
