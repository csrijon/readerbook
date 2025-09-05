import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from '../components/Search';

// Importing the hook to handle safe area (top notch, punch hole etc.)
import { SafeAreaView } from 'react-native-safe-area-context';
// import Bottomnav from '../components/Bottomnav';

// Dummy data for books
const booksTrending = [
  { id: 1, title: '7 Habits', image: require('../assets/image7.png') },
  { id: 2, title: 'Zero to One', image: require('../assets/image7.png') },
  { id: 4, title: '365 Days', image: require('../assets/image7.png') },
];

// Functional Component
const MainScreen = ({ navigation }) => {
  // const insets = useSafeAreaInsets();
  const [Lightmode, Setlightmode] = useState(true)

  return (
    <SafeAreaView style={[styles.container,]}>
      <StatusBar translucent backgroundColor="#0f1114" barStyle="Light-content" />
      {/* Header */}
      <View style={styles.header}>

        <TouchableOpacity onPress={() => Setlightmode(!Lightmode)} >
          <View style={styles.toggle} >
            <MaterialIcons name={Lightmode ? "dark-mode" : "wb-sunny"} size={24} color="#66B2FF" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Setting')} >
          <View style={styles.circles}>
            <Image style={styles.circleImage} source={require('../assets/me.png')} />
          </View>
        </TouchableOpacity>
      </View>
      {/* <View style = {styles.mainsearch} >
<Search placeholder = "Search Here..." />
      </View> */}

      <ScrollView style={styles.scroll}
        contentContainerStyle={{ paddingBottom: 80 }} >
        {/* Trending Books Section */}
        <Text style={styles.sectionTitle}>Trending Books</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {booksTrending.map((book) => (
            <View key={book.id} style={styles.bookCard}>
              <Image source={book.image} style={styles.bookImage} />

              {/* Rating Badge - Left */}
              <View style={styles.ratingBadge}>
                <Text style={styles.ratingText}>{book.rating}4/5</Text>
              </View>

              {/* Crown Icon - Right */}
              <MaterialCommunityIcons
                name="crown"
                size={24}
                color="#f4a300"
                style={styles.crownIcon}
              />
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
          {booksTrending.map((book) => (
            <View key={book.id} style={styles.bookCard}>
              <Image source={book.image} style={styles.bookImage} />

              {/* Rating Badge - Left */}
              <View style={styles.ratingBadge}>
                <Text style={styles.ratingText}>{book.rating}4/5</Text>
              </View>

              {/* Crown Icon - Right */}
              <MaterialCommunityIcons
                name="crown"
                size={24}
                color="#f4a300"
                style={styles.crownIcon}
              />
            </View>
          ))}
        </ScrollView>


        <View style={styles.topheafder} >
          <Text style={styles.sectionTitle} >Top 10</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll} >View All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {booksTrending.map((book) => (
            <View key={book.id} style={styles.bookCard}>
              <Image source={book.image} style={styles.bookImage} />

              {/* Rating Badge - Left */}
              <View style={styles.ratingBadge}>
                <Text style={styles.ratingText}>{book.rating}4/5</Text>
              </View>

              {/* Crown Icon - Right */}
              <MaterialCommunityIcons
                name="crown"
                size={24}
                color="#f4a300"
                style={styles.crownIcon}
              />
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
  crownIcon: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  mainsearch: {
    paddingHorizontal: 22
  },
  scroll: {
    paddingHorizontal: 22,
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
    marginVertical: 15,
  },
  bookCard: {
    width: 150,
    height: 210,
    backgroundColor: '#14171acc',
    borderRadius: 23,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#3d47514d',
  },
  bookImage: {
    width: '100%',
    height: '100%',
    borderRadius: 23,
    resizeMode: 'cover',
  },
  ratingBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#30384080',
    backgroundColor: '#14171acc',
  },
  ratingText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
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
