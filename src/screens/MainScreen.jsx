import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

// Importing the hook to handle safe area (top notch, punch hole etc.)
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import Bottomnav from '../components/Bottomnav';

// Dummy data for books
const booksTrending = [
  { id: 1, title: '7 Habits', image: require('../assets/image7.png') },
  { id: 2, title: 'Zero to One', image: require('../assets/image7.png') },
];
// Dummy data for books
const booksFavourites = [
  { id: 3, title: 'Think and Grow Rich', image: require('../assets/image7.png') },
  { id: 4, title: '365 Days', image: require('../assets/image7.png') },
];

// Functional Component
const MainScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity  >
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ReadLink</Text>
        <TouchableOpacity>
          <View style={styles.circles}>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scroll}
        contentContainerStyle={{ paddingBottom: 80 }} >
        {/* Trending Books Section */}
        <Text style={styles.sectionTitle}>Trending Books</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {booksTrending.map((book) => (
            <View key={book.id} style={styles.bookCard}>
              <Image source={book.image} style={styles.bookImage} />
              {/* <Text>{book.title}</Text> */}
            </View>
          ))}
        </ScrollView>
        {/* Favourites Section */}
        <View style={styles.favHeader}>
          <Text style={styles.sectionTitle}>Your Favourites</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {booksFavourites.map((book) => (
            <View key={book.id} style={styles.bookCard}>
              <Image source={book.image} style={styles.bookImage} />
            </View>
          ))}
        </ScrollView>

        <View style={styles.topheafder} >
          <Text style={styles.sectionTitle} >Top 10</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll} >View All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal>
          {booksTrending.map((book) => (
            <View key={book.id} style={styles.bookCard} >
              <Image source={book.image} style={styles.bookImage} />
            </View>
          ))}
        </ScrollView>

      </ScrollView>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    paddingHorizontal: 16,
    flex: 1,
  },
  circles: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#ffffff',
  },
  header: {
    height: 60,
    backgroundColor: '#23085A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuIcon: {
    color: '#fff',
    fontSize: 24,
  },
  profileIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  bookCard: {
    backgroundColor: '#9D83D2',
    borderRadius: 20,
    marginRight: 12,
    padding: 10,
    alignItems: 'center',
  },
  bookImage: {
    width: 154,
    height: 205,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  favHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topheafder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  viewAll: {
    color: '#000000',
    fontWeight: '500',
  },
  navItem: {
    color: '#fff',
    fontWeight: '500',
  },
  bottomNavWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#4B2BAA'
  }
});
