import React from "react";
import { StyleSheet, TouchableOpacity, View, Text,ScrollView } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Search from '../components/Search';

const Downloads = () => {
    const insets = useSafeAreaInsets()
    return (
        <SafeAreaView style={[styles.container, { paddingTop: insets.top }]} >
            <TouchableOpacity style={styles.bakicon} >
                <MaterialIcons name="arrow-back-ios" size={22} color="#fff" />
            </TouchableOpacity>
            {/* {header section} */}
            <View style={styles.header} >
                <Text style={styles.Dloadtext} >Downloads</Text>
                <TouchableOpacity>
                    <Text style={styles.Sorttext}>sort</Text>
                </TouchableOpacity>
            </View>
            {/* {divider} */}
            <View style={styles.Divider} />
            {/* {Search Section} */}
            <View style={styles.Search} >
                <Search/>
            </View>
            <ScrollView>

            </ScrollView>
        </SafeAreaView>
    )
}
export default Downloads


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f1214',
    },
    bakicon: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    header: {
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    Dloadtext: {
        color: '#ffffff'
    },
    Sorttext: {
        color: 'white'
    },
    Divider: {
        height: 2,
        width: '100%',
        backgroundColor: '#3d47514d',
        marginVertical: 10,
    },
    Search:{
        paddingHorizontal:20,
    }

})


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