import React from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from './src/screens/MainScreen';
// import SearchScreen from './src/screens/SearchScreen';
// import BookListScreen from './src/screens/BookListScreen';
// import BookDetailsScreen from './src/screens/BookDetailsScreen';
// import AudioBookPlayer from './src/screens/AudioBookPlayer';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SignUpScreen from './src/screens/SignUpScreen';
// import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
const Stack = createNativeStackNavigator()

const Stacks = () => {
  return (
    <Stack.Navigator
      initialRouteName="welcome"
      screenOptions={{ headerShown: false }} >
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="signup" component={SignUpScreen} />
      <Stack.Screen name='signin' component={SignInScreen} />
      <Stack.Screen name='Home'   component={MainScreen}/>
    </Stack.Navigator>
  );
};


export default function App() {
  return (
   <NavigationContainer>
    <Stacks/>
   </NavigationContainer>
  );
}
