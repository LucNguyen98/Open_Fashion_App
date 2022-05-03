import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from 'screens/Home';
import {SCREEN_NAME} from 'constants/screen_name';
const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HomeScreen}
        name={SCREEN_NAME.HOME_SCREEN}
        // options={{
        //   headerShown: false,
        //   header
        // }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
