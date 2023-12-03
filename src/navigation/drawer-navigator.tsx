import { createDrawerNavigator } from '@react-navigation/drawer';
import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { ComponentType } from 'react';
import * as React from 'react';

import { TabDeliveroo } from './tab-deliveroo';
import { TabNavigator } from './tab-navigator';

type DrawerParamList = {
  TabNavigator: undefined;
  TabDeliveroo: undefined;
};

type DrawerType = {
  name: keyof DrawerParamList;
  component: ComponentType<any>;
  label: string;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export type DrawerList<T extends keyof DrawerParamList> = {
  navigation: NativeStackNavigationProp<DrawerParamList, T>;
  route: RouteProp<DrawerParamList, T>;
};

const drawers: DrawerType[] = [
  { name: 'TabNavigator', component: TabNavigator, label: 'TabNavigator' },
  { name: 'TabDeliveroo', component: TabDeliveroo, label: 'TabDeliveroo' },
];

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      {drawers.map(({ name, component, label }) => (
        <Drawer.Screen
          key={name}
          name={name}
          component={component}
          options={{ title: label, headerShown: false }}
        />
      ))}
    </Drawer.Navigator>
  );
};
