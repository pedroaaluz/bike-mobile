/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Map from './screen/Map';
import Settings from './screen/Settings';

export type BottomTabParamList = {
  Map: undefined;
  Settings: undefined;
};

const {Navigator, Screen} =
  createMaterialBottomTabNavigator<BottomTabParamList>();

export const Route = () => {
  return (
    <Navigator initialRouteName="Map" barStyle={{backgroundColor: '#fff'}}>
      <Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: 'Mapa',
          tabBarIcon: ({focused}: {color: string; focused: boolean}) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'map-outline'}
              color={focused ? '#F5F5F5' : '#A5A5A5'}
              size={26}
            />
          ),
        }}
      />
      <Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Configurações',
          tabBarIcon: ({focused}: {color: string; focused: boolean}) => (
            <MaterialCommunityIcons
              name={focused ? 'cog' : 'cog-outline'}
              color={focused ? '#F5F5F5' : '#A5A5A5'}
              size={26}
            />
          ),
        }}
      />
    </Navigator>
  );
};
