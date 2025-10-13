import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../Components/Header';
type IconName = React.ComponentProps<typeof Ionicons>['name'];

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Header />
      <Tabs
        screenOptions={({ route }) => {
          let iconName: IconName = 'home';
          let tabBarLabel = route.name;

          switch (route.name) {
            case 'index':
              iconName = 'book';
              tabBarLabel = 'Surahs';
              break;
            case 'fav':
              iconName = 'bookmark';
              tabBarLabel = 'Favorites';
              break;
            case 'settings':
              iconName = 'settings';
              tabBarLabel = 'Settings';
              break;
          }

          return {
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={iconName} size={size} color={color} />
            ),
            tabBarLabel,
            tabBarActiveTintColor: '#007AFF',
            tabBarInactiveTintColor: 'gray',

            // This disables the default Expo header
            headerShown: false,
          };
        }}
      />
    </SafeAreaProvider>
  );
}
