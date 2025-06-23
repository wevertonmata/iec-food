import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './view/home';
import Login from './view/login';
import Register from './view/register';
import SplashScreen from './view/splash';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
      <Stack.Navigator initialRouteName="Splash" >
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Cardápio', headerTitleAlign: 'center' }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
      </Stack.Navigator>
  );
}
   