import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {
  LoginStackNavigator,
  SignStackNavigator,
  HomeStackNavigator,
  StarStackNavigator,
  CategoryStackNavigator,
  SearchStackNavigator,
  MypageStackNavigator,
} from './StackNav';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ref = React.createRef(null);

export const BottomTabNavigator = props => {
  return (
    <Tab.Navigator
      backBehavior={'initialRoute'}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#034EA2',
        inactiveTintColor: '#ACACAC',
        labelStyle: {
          fontSize: 12,
          letterSpacing: -1,
        },
        style: {
          height: 60,
          width: '100%',
          paddingRight: 5,
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? require('../images/menu01_on.png')
              : require('../images/menu01_off.png');
          } else if (route.name === 'Star') {
            iconName = focused
              ? require('../images/menu02_on.png')
              : require('../images/menu02_off.png');
          } else if (route.name === 'Category') {
            iconName = focused
              ? require('../images/menu03_on.png')
              : require('../images/menu03_off.png');
          } else if (route.name === 'Search') {
            iconName = focused
              ? require('../images/menu04_on.png')
              : require('../images/menu04_off.png');
          } else if (route.name === 'Mypage') {
            iconName = focused
              ? require('../images/menu05_on.png')
              : require('../images/menu05_off.png');
          }
          return (
            <Image
              source={iconName}
              resizeMode="contain"
              style={{width: 25, height: 24}}
            />
          );
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{tabBarLabel: '홈'}}
      />
      <Tab.Screen
        name="Star"
        component={StarStackNavigator}
        options={{tabBarLabel: '추천'}}
      />
      <Tab.Screen
        name="Category"
        component={CategoryStackNavigator}
        options={{tabBarLabel: '카테고리'}}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{tabBarLabel: '검색'}}
      />
      <Tab.Screen
        name="Mypage"
        component={MypageStackNavigator}
        options={{tabBarLabel: '마이컬리'}}
      />
    </Tab.Navigator>
  );
};

const TabNavigatorOn = props => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <TabBar {...props} />}>
      <Stack.Screen name="Home" component={HomeStackNavigator} />
      <Stack.Screen name="Star" component={StarStackNavigator} />
      <Stack.Screen name="Category" component={CategoryStackNavigator} />
      <Stack.Screen name="Search" component={SearchStackNavigator} />
      <Stack.Screen name="Mypage" component={MypageStackNavigator} />
    </Stack.Navigator>
  );
};

const TabNavigatorOff = props => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginStackNavigator} />
      <Stack.Screen name="Sign" component={SignStackNavigator} />
    </Stack.Navigator>
  );
};

export default TabNavigatorOn;
