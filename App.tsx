import React from 'react';
import {Route} from './src/route';
import {PaperProvider} from 'react-native-paper';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <Route />
    </PaperProvider>
  );
}

export default App;
