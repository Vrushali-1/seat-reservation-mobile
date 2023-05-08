import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  LoginPage  from './src/components/Login';
import RegistrationPage from './src/components/Register';



const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ title: 'Bus Seat Reservation', headerShown: false }}
        />
        <Stack.Screen name="RegistrationPage" component={RegistrationPage} options={{ title: 'Bus Seat Reservation' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




