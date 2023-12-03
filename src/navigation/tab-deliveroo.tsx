import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'nativewind';
import type { ComponentType } from 'react';
import * as React from 'react';
import type { SvgProps } from 'react-native-svg';

import { Tab1, Tab2, Tab3 } from '@/screens';
import {
  colors,
  Rate as RateIcon,
  Share as ShareIcon,
  Website as WebsiteIcon,
} from '@/ui';

type TabParamList = {
  Tab1: undefined;
  Tab2: undefined;
  Tab3: undefined;
};

type TabType = {
  name: keyof TabParamList;
  component: ComponentType<any>;
  label: string;
};

type TabIconsType = {
  [key in keyof TabParamList]: (props: SvgProps) => JSX.Element;
};

const Tab = createBottomTabNavigator<TabParamList>();

const tabsIcons: TabIconsType = {
  Tab1: (props: SvgProps) => <ShareIcon {...props} />,
  Tab2: (props: SvgProps) => <RateIcon {...props} />,
  Tab3: (props: SvgProps) => <WebsiteIcon {...props} />,
};

const tabs: TabType[] = [
  {
    name: 'Tab1',
    component: Tab1,
    label: 'Tab1',
  },
  {
    name: 'Tab2',
    component: Tab2,
    label: 'Tab2',
  },
  {
    name: 'Tab3',
    component: Tab3,
    label: 'Tab3',
  },
];

type BarIconType = {
  name: keyof TabParamList;
  color: string;
};

const BarIcon = ({ color, name, ...reset }: BarIconType) => {
  const Icon = tabsIcons[name];
  return <Icon color={color} {...reset} />;
};

export const TabDeliveroo = () => {
  const { colorScheme } = useColorScheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarInactiveTintColor:
          colorScheme === 'dark' ? colors.charcoal[400] : colors.neutral[400],
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color }) => <BarIcon name={route.name} color={color} />,
      })}
    >
      <Tab.Group screenOptions={{ headerShown: false }}>
        {tabs.map(({ name, component, label }) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={component}
              options={{
                title: label,
                tabBarTestID: `${name}-tab-deliveroo`,
              }}
            />
          );
        })}
      </Tab.Group>
    </Tab.Navigator>
  );
};
