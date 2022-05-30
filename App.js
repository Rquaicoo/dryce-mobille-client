import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Mainstack from './navigations/Mainstack';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Startup from './Screens/Startup';
import Login from './Screens/Login';
import Register from './Screens/Register';
import OTP from './Screens/OTP';




const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Mainstack />
    </NavigationContainer>

    // </Stack.Navigator>
    // </NavigationContainer>

  );
}
