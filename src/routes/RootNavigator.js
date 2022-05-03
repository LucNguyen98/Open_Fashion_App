import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './MainNavigator';

export default function RootNavigator() {
  return (
    <NavigationContainer
      onStateChange={({routeNames}) => {
        console.log('routeNames', routeNames);
      }}>
      <MainNavigator />
    </NavigationContainer>
  );
}
