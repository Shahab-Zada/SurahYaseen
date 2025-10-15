import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type IconName = React.ComponentProps<typeof Ionicons>['name'];

export default function Layout() {
   

  return (
    <SafeAreaProvider>
  
      <Tabs
        screenOptions={({ route }) => {
          let iconName: IconName = 'book';
          let tabBarLabel = route.name;

          switch (route.name) {
            case 'index':
              iconName = 'book';
              tabBarLabel = 'Surahs';
              break;
           
            case 'setting':
              iconName = 'settings'; // 🧩 nice outlined settings icon
              tabBarLabel = 'Setting';
              break;
                 case 'about': // 👈 added new tab
              iconName = 'information-circle';
              tabBarLabel = 'About';
              break;
           case 'video':
              iconName = 'logo-youtube';
              tabBarLabel = 'Watch';
              break;
          }

          return {
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={iconName} size={size} color={color} />
            ),
            tabBarLabel,
            tabBarActiveTintColor: '#007AFF',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          };
        }}
      />
    </SafeAreaProvider>
  );
}
