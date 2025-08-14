import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import MainScreen from './src/screens/MainScreen';
// import SearchScreen from './src/screens/SearchScreen';
// import BookListScreen from './src/screens/BookListScreen';
// import BookDetailsScreen from './src/screens/BookDetailsScreen';
import AudioBookPlayer from './src/screens/AudioBookPlayer';

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <MainScreen /> */}
      {/* <SearchScreen/> */}
      {/* <BookListScreen/> */}
      {/* <BookDetailsScreen/> */}
      <AudioBookPlayer/>
    </SafeAreaProvider>
  );
}
