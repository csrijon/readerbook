import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import MainScreen from './src/screens/MainScreen';
// import SearchScreen from './src/screens/SearchScreen';
import BookListScreen from './src/screens/BookListScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <MainScreen /> */}
      {/* <SearchScreen/> */}
      <BookListScreen/>
    </SafeAreaProvider>
  );
}
