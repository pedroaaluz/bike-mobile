import React from 'react';

import Main from './Main';
import { PreferencesProvider } from './stores/theme';

const App = (): JSX.Element => {
  return (
    <PreferencesProvider>
      <Main />
    </PreferencesProvider>
  );
};

export default App;
