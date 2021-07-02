import React, {useState, useEffect, useRef} from 'react';
import {View, Text, BackHandler, ToastAndroid} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/Login';
import Sign from '../screens/Sign';

import Home from '../screens/Home';
import Star from '../screens/Star';
import Category from '../screens/Category';
import Search from '../screens/Search';
import Mypage from '../screens/Mypage';

const Stack = createStackNavigator();

export const LoginStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export const SignStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Sign" component={Sign} />
    </Stack.Navigator>
  );
};

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export const StarStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Star" component={Star} />
    </Stack.Navigator>
  );
};

export const CategoryStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Category" component={Category} />
    </Stack.Navigator>
  );
};

export const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export const MypageStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Mypage" component={Mypage} />
    </Stack.Navigator>
  );
};

const StackNavigation = () => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default StackNavigation;
