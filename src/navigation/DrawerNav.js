import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator, {BottomTabNavigator} from './TabNav';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <>
      <Drawer.Navigator initialRouteName="TabNavigatorOn">
        <Drawer.Screen name="TabNavigatorOn" component={BottomTabNavigator} />
        <Drawer.Screen name="TabNavigatorOff" component={TabNavigator} />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigator;
