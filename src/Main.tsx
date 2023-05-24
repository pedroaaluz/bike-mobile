import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import { Route } from './route';
import { usePreferences } from './stores/theme';

const Main = () => {
  const { themeComponent } = usePreferences();

  return (
    <PaperProvider theme={themeComponent}>
      <NavigationContainer theme={themeComponent}>
        <Route />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Main;
