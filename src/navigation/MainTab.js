/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute  } from '@react-navigation/native';
import { Colors } from '../theme/index';
import { Container } from '../components/index';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import CustomTabBarComponent from "./CustomTabBarComponent"
const Tab = createBottomTabNavigator();

 
const getTabBarVisibility = (route) => {
  let routeName =  getFocusedRouteNameFromRoute(route) ?? 'home'

  if (routeName === 'person' || routeName === 'movie') {
    return false;
  }

  return true;
}

const MainTab = () =>{

   console.log("-----------MainTab-----")
   return <Tab.Navigator
   tabBar={CustomTabBarComponent}
   initialRouteName="homeStack"
   tabBarOptions={{
     showLabel: false,
     tabStyle: {
       borderTopColor: Colors.green,
       backgroundColor: Colors.black,
       borderTopWidth: StyleSheet.hairlineWidth,
       backgroundColor: "transparent" ,
     },
     keyboardHidesTabBar: true,
     activeTintColor: Colors.black,
     inactiveTintColor: Colors.black,
   }}  
 >
   <Tab.Screen
     name="homeStack"
     component={HomeStack}
     options={({ route }) => ({
       tabBarVisible:  getTabBarVisibility(route)
     })}
   />
   <Tab.Screen
     name="a"
     component={Container}
   />
   <Tab.Screen
     name="profileStack"
     component={ProfileStack}
   />
 </Tab.Navigator>
}

export default MainTab;
