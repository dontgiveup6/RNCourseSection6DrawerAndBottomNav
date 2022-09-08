import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import ChatScreen from './screens/ChatScreen';
import SettingsScreen from './screens/SettingsScreen';
import LogOutScreen from './screens/LogOutScreen';
import ArchiveScreen from './screens/ArchiveScreen';
import DownloadScreen from './screens/DownloadScreen';
import SportScreen from './screens/SportScreen';
import TaskScreen from './screens/TaskScreen';
import TransportScreen from './screens/TransportScreen';

// const Drawer = createDrawerNavigator();

const BottomTap = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTap.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#3c0a6b' },
          headerTintColor: 'white',
          tabBarActiveTintColor: '#3c0a6b',
          tabBarStyle: { backgroundColor: '#ccc' },
          tabBarActiveBackgroundColor: '#f0e1ff',
          // drawerActiveBackgroundColor: '#f0e1ff',
          // drawerActiveTintColor: '#3c0a6b',
          // drawerStyle: { backgroundColor: '#ccc' },
        }}
      >
        <BottomTap.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <BottomTap.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
        <BottomTap.Screen
          name="Favourite"
          component={FavouritesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="star" color={color} size={size} />
            ),
          }}
        />
        <BottomTap.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbox" color={color} size={size} />
            ),
          }}
        />
        <BottomTap.Screen
          name="Archive"
          component={ArchiveScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="archive" color={color} size={size} />
            ),
          }}
        />
        <BottomTap.Screen
          name="Download"
          component={DownloadScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="download" color={color} size={size} />
            ),
          }}
        />
        <BottomTap.Screen
          name="Sport"
          component={SportScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="american-football" color={color} size={size} />
            ),
          }}
        />
        <BottomTap.Screen
          name="Task"
          component={TaskScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="checkmark" color={color} size={size} />
            ),
          }}
        />
        <BottomTap.Screen
          name="Transport"
          component={TransportScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="car" color={color} size={size} />
            ),
          }}
        />

        <BottomTap.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" color={color} size={size} />
            ),
          }}
        />
        <BottomTap.Screen
          name="Log Out"
          component={LogOutScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="log-out" color={color} size={size} />
            ),
          }}
        />
      </BottomTap.Navigator>
    </NavigationContainer>
  );
}

{
  /* <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#3c0a6b' },
          headerTintColor: 'white',
          drawerActiveBackgroundColor: '#f0e1ff',
          drawerActiveTintColor: '#3c0a6b',
          // drawerStyle: { backgroundColor: '#ccc' },
        }}
      >
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerLabel: 'Welcome Screen',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator> */
}
