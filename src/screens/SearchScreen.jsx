import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View, Text, ScrollView, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Search from '../components/Search';
import Bottomnav from '../components/Bottomnav';
const SearchScreen = () => {
    const inset = useSafeAreaInsets()
    return (
        <SafeAreaView style={[styles.Container, { paddingTop: inset.top }]} >
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <TouchableOpacity style={styles.backArrow} >
                <MaterialIcons name="arrow-back-ios" color="#000000" size={24} />
            </TouchableOpacity>

            {/* Search Bar */}
            <Search
                placeholder="Search Here..."
            />

            <View style={styles.mainCategories} >
                <Text style={styles.TextCategories}  >Categories</Text>
                <View style={styles.categoriesWrapper} >
                    {categories.map((item, index) => (
                        <TouchableOpacity style={styles.categoryItem} key={index} >
                            <Text style={styles.categoryText} >{item}</Text>
                        </TouchableOpacity>
                    )
                    )}
                </View>
            </View>
            <View style={styles.AuthorsContainer} >
                <Text style={styles.heading} >Famous Authors</Text>
                <ScrollView
                    horizontal
                    contentContainerStyle={styles.list}
                    showsHorizontalScrollIndicator={false}
                >
                    {authors.map((item, index) => (
                        <View style={styles.authorCard} key={index} >
                            <Image source={item.image} style={styles.Img} />
                            <Text style={styles.name} >{item.name}</Text>
                        </View>
                    )
                    )}
                </ScrollView>
            </View>

            <View style={styles.Trandingcontainer} >
                <Text style={styles.Trandingheading} >Trending Books</Text>
                <ScrollView horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: inset.bottom + 80 }}
                >
                    {books.map((book) => (
                        <View style={styles.bookCard} key={book.id} >
                            <Image source={book.image} />
                        </View>
                    )
                    )}
                </ScrollView>
            </View>

            <Bottomnav />

        </SafeAreaView>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 18,
    },
    backArrow: {
        marginTop: 20,
        paddingLeft: 5,
    },
    mainCategories: {
        marginTop: 30,
    },
    TextCategories: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        color: '#000000',
        marginBottom: 12,
    },
    categoriesWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    categoryItem: {
        backgroundColor: '#EDE0FF',
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    categoryText: {
        color: '#000000',
        fontSize: 14,
        fontWeight: '500',
    },
    AuthorsContainer: {
        marginTop: 20,
    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    list: {
        alignItems: 'center',
    },
    authorCard: {
        alignItems: 'center',
        marginRight: 16,
    },
    Img: {
        width: 70,
        height: 70,
    },
    name: {
        marginTop: 6,
        fontSize: 12,
        color: '#000',
    },
    Trandingcontainer: {
        marginVertical: 20,
    },
    Trandingheading: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    bookCard: {
        marginRight: 12,
        borderRadius: 10,
        overflow: 'hidden',
    },
    navButton: {
        padding: 10,
    },

})

const categories = [
    'Motivational',
    'Fictional',
    'Sports',
    'Biography',
    'Inspiring',
    'Educational',
    'Non-Fictional',
    'Futuristic',
    'Adventure',
    'Horror',
];

const authors = [
    { name: 'Stephen Covey', image: require('../assets/Ellipse17.png') },
    { name: 'James Clear', image: require('../assets/Ellipse19.png') },
    { name: 'Napoleon Hill', image: require('../assets/Ellipse20.png') },
    { name: 'Morgan Housel', image: require('../assets/Ellipse20.png') },
    { name: 'Robert Green', image: require('../assets/Ellipse19.png') },
];

const books = [
    {
        id: 1,
        title: "The 48 Laws of Power",
        image: require('../assets/Rectangle392.png'),
    },
    {
        id: 2,
        title: "Zero to One",
        image: require('../assets/Rectangle393.png'),
    },
    {
        id: 3,
        title: "Rich Dad Poor Dad",
        image: require('../assets/Rectangle394.png'),
    },
    {
        id: 4,
        title: "Rich Dad Poor Dad",
        image: require('../assets/Rectangle393.png'),
    },
];