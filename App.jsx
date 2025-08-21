// import 'react-native-gesture-handler';
import React from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainScreen from './src/screens/MainScreen';
// import SearchScreen from './src/screens/SearchScreen';
// import BookListScreen from './src/screens/BookListScreen';
// import BookDetailsScreen from './src/screens/BookDetailsScreen';
// import AudioBookPlayer from './src/screens/AudioBookPlayer';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SignUpScreen from './src/screens/SignUpScreen';
// import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import SearchScreen from './src/screens/SearchScreen';
import BookListScreen from './src/screens/BookListScreen';
import BookDetailsScreen from './src/screens/BookDetailsScreen';
import AudioBookPlayer from './src/screens/AudioBookPlayer';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const Stacks = () => {
  return (
    <Stack.Navigator
      initialRouteName="welcome"
      screenOptions={{ headerShown: false }} >
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="signup" component={SignUpScreen} />
      <Stack.Screen name='signin' component={SignInScreen} />
      <Stack.Screen name='Details' component={BookDetailsScreen} />
      <Stack.Screen name= 'Audio'  component={AudioBookPlayer}/>
      <Stack.Screen name='Tabs' component={Tabs} />
    </Stack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{
      headerShown: false,
      tabBarHideOnKeyboard:true,
      tabBarStyle: {
        backgroundColor: '#4B2BAA',
        position:'absolute'
      },
      tabBarActiveTintColor:'#ffffff',
      tabBarInactiveTintColor:'#9D83D2',
      tabBarLabelStyle: {
        fontSize: 12,
      }
    }} >
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="house" color={color} size={size} />
          )
        }}
      />

      <Tab.Screen name='search' component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen name='Books' component={BookListScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="bookmark-border" color={color} size={size} />
        )
      }} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}
