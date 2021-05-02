import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Movie, Person } from '../screens/index';

const Stack = createStackNavigator();



const HomeStack = () => {


  return <Stack.Navigator 
  initialRouteName="home" 
  headerMode="none">
    <Stack.Screen name="home" component={Home} />
    <Stack.Screen name="movie" component={Movie} />
    <Stack.Screen name="person"   component={Person} />
  </Stack.Navigator>
}



export default HomeStack;
