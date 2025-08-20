// import 'react-native-gesture-handler';
import React from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
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
      <Stack.Screen name='search' component={SearchScreen} />
      <Stack.Screen name='Tabs' component={Tabs} />
    </Stack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }} >
      <Tab.Screen name='Home' component={MainScreen} />
      <Tab.Screen name='search' component={SearchScreen} />
      <Tab.Screen name='Books' component={BookListScreen} />
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
