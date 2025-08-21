import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Search from '../components/Search';


export default function BookListScreen({navigation}) {
  const inset = useSafeAreaInsets()
  return (
    <SafeAreaView style={[styles.container,{paddingTop:inset.top}]}>
       <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      {/* Back Button */}
      <TouchableOpacity style={styles.backBtn}>
        <MaterialIcons name="arrow-back-ios" color="#000000" size={24} />
      </TouchableOpacity>

      {/* Search Bar */}
      <View style = {styles.Search} ><Search 
      placeholder = "Search Here..."
      /></View>
      
      {/* Book List */}
      <ScrollView style = {styles.scroll} contentContainerStyle={{ paddingBottom: 20 }}>
        {books.map((book, index) => (
          <View  key={index} style={styles.bookCard}>
            {/* Image */}
            <Image source={book.image} style={styles.bookImage} />
            {/* Info */}
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.bookTitle}>{book.title}</Text>
              <Text style={styles.bookAuthor}>by {book.author}</Text>

              <View style={styles.actions}>
                <TouchableOpacity onPress={()=> navigation.navigate('Details') } style={styles.actionBtn}>
                  <MaterialIcons name="menu-book" size={18} color="#ffffff" />
                  <Text style={styles.actionText}>Read</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionBtn}>
                  <MaterialIcons name="play-circle" size={18} color="#ffffff" />
                  <Text style={styles.actionText}>Play</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Download Icon */}
            <TouchableOpacity>
              <MaterialIcons name="file-download" size={22} color="#ffffff" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Search:{
    paddingHorizontal:16
  },
  backBtn: {
    paddingHorizontal: 16,
    marginTop:30
  },
  scroll:{
    paddingHorizontal:8
  },
  bookCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#a67df7',
    marginHorizontal: 15,
    marginTop: 12,
    borderRadius: 10,
    padding: 10,
  },
  bookImage: {
    width: 50,
    height: 70,
    borderRadius: 4,
  },
  bookTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff',
  },
  bookAuthor: {
    fontSize: 12,
    color: '#e6d6ff',
    marginBottom: 8,
  },
  actions: {
    flexDirection: 'row',
    marginTop: 2,
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  actionText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#fff',
  },
});
const books = [
  {
    title: '365 Days With Self-Discipline',
    author: 'Martin Meadows',
    image: require('../assets/Rectangle392.png'),
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    image: require('../assets/Rectangle392.png'),
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    image: require('../assets/Rectangle393.png'),
  },
  {
    title: 'Think and Grow Rich',
    author: 'Napoleon Hill',
    image: require('../assets/Rectangle394.png'),
  },
  {
    title: 'The 40 Rules of Love',
    author: 'Elif Shafak',
    image: require('../assets/Rectangle393.png'),
  },
];