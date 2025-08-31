import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

// Importing the hook to handle safe area (top notch, punch hole etc.)
import {SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
// import Bottomnav from '../components/Bottomnav';

// Dummy data for books
const booksTrending = [
  { id: 1, title: '7 Habits', image: require('../assets/image7.png') },
  { id: 2, title: 'Zero to One', image: require('../assets/image7.png') },
  { id: 4, title: '365 Days', image: require('../assets/image7.png') },
];
// Dummy data for books
const booksFavourites = [
  { id: 3, title: 'Think and Grow Rich', image: require('../assets/image7.png') },
  { id: 4, title: '365 Days', image: require('../assets/image7.png') },
  { id: 4, title: '365 Days', image: require('../assets/image7.png') },
];

// Functional Component
const MainScreen = ({ navigation }) => {
  // const insets = useSafeAreaInsets();
  const [Lightmode,Setlightmode] =  useState(true)

  return (
    <SafeAreaView style={[styles.container, ]}>
      <StatusBar translucent backgroundColor="#0f1114" barStyle="Light-content" />
      {/* Header */}
      <View style={styles.header}>

        <TouchableOpacity onPress={()=>Setlightmode(!Lightmode) } >
          <View style={styles.toggle} >
            <MaterialIcons name={Lightmode?"dark-mode":"wb-sunny"}  size={24} color="#66B2FF" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Setting')} >
          <View style={styles.circles}>
            <Image style={styles.circleImage} source={require('../assets/me.png')} />
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
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1214',
  },
  scroll: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#0f1214'
  },
  toggle: {
    borderWidth: 1,
    borderColor: '#30384080',
    borderRadius: 15,
    padding: 6,
  },
  circles: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  circleImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(241, 239, 239, 0.1)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    // borderRadius: 12,      
    backgroundColor: '#0f1114',
    gap: 15
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
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  bookCard: {
    backgroundColor: '#14171acc',
    borderRadius: 23,
    marginRight: 12,
    padding: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#3d47514d'
  },
  bookImage: {
    width: 99,
    height: 157,
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
    color: '#ffffff',
    fontWeight: '500',
  },
  navItem: {
    color: '#fff',
    fontWeight: '500',
  },
});
