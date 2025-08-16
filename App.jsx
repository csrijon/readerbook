import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import MainScreen from './src/screens/MainScreen';
// import SearchScreen from './src/screens/SearchScreen';
// import BookListScreen from './src/screens/BookListScreen';
// import BookDetailsScreen from './src/screens/BookDetailsScreen';
// import AudioBookPlayer from './src/screens/AudioBookPlayer';
// import WelcomeScreen from './src/screens/WelcomeScreen';
// import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
export default function App() {
  return (
    <SafeAreaProvider>
      {/* <MainScreen /> */}
      {/* <SearchScreen/> */}
      {/* <BookListScreen/> */}
      {/* <BookDetailsScreen/> */}
      {/* <AudioBookPlayer/> */}
      {/* <WelcomeScreen/> */}
      {/* <SignUpScreen/> */}
      <SignInScreen/>
    </SafeAreaProvider>
  );
}
