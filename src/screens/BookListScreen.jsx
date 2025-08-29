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
       <StatusBar translucent backgroundColor="transparent" barStyle="Light-content" />
      {/* Back Button */}
      <TouchableOpacity style={styles.backBtn}>
        <MaterialIcons name="arrow-back-ios" color="#66B2FF" size={24} />
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
                <TouchableOpacity onPress={()=> navigation.navigate('Details')} style={styles.actionBtn}>
                  <MaterialIcons name="menu-book" size={18} color="#66b2ff" />
                  <Text style={styles.actionText}>Read</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Audio') }  style={styles.actionBtn}>
                  <MaterialIcons name="play-circle" size={18} color="#66b2ff" />
                  <Text style={styles.actionText}>Play</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Download Icon */}
            <TouchableOpacity>
              <MaterialIcons name="file-download" size={22} color="#66b2ff" />
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
    backgroundColor: '#0f1114',
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
    backgroundColor: '#14171acc',
    marginHorizontal: 15,
    marginTop: 12,
    borderRadius: 16,
    padding: 10,
    borderTopWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderBottomWidth:1,
    borderColor:'#3d47514d'
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
    color: '#b6bec9',
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
    color: '#b6bec9',
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