import React from 'react';
import { StatusBar, StyleSheet, TouchableOpacity, View, Text, ScrollView, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Search from '../components/Search';
const SearchScreen = ({ navigation }) => {
    const inset = useSafeAreaInsets()
    return (
        <SafeAreaView style={[styles.Container, { paddingTop: inset.top }]} >
            <StatusBar translucent backgroundColor="#0f1214" barStyle="Light-content" />
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow} >
                <MaterialIcons name="arrow-back-ios" color="#66b2ff" size={24} />
            </TouchableOpacity  >

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
                <Text style={styles.Trandingheading} >Reactly Played Books...</Text>
                {/* <ScrollView horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: inset.bottom + 80 }}
                >
                    {books.map((book) => (
                        <View style={styles.bookCard} key={book.id} >
                            <Image source={book.image} />
                        </View>
                    )
                    )}
                </ScrollView> */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: inset.bottom + 80 }}
                >
                    {books.map((book) => (
                        <View style={styles.bookCard} key={book.id}>
                            <Image source={book.image} style={styles.cardImage} />
                            {/* {overlay rateing} */}
                            <View style={styles.ratingBadge}>
                                <Text style={styles.ratingText}>{book.rating}4/5</Text>
                            </View>
                            {/* {overlay text} */}
                            <View style={styles.overlay}>
                                <Text style={styles.title}>{book.title}</Text>
                                <Text style={styles.subtitle}>{book.subtitle}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>

            </View>


        </SafeAreaView>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#0f1214',
        paddingHorizontal: 16,
        color: 'white'
    },
    backArrow: {
        // marginTop: 30,
    },
    mainCategories: {
        marginTop: 30,
    },
    TextCategories: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        color: 'white',
        marginBottom: 12,
    },
    categoriesWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    categoryItem: {
        backgroundColor: '#14171acc',
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderColor: '#3d47514d'
    },
    categoryText: {
        color: '#b6bec9',
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
        color: 'white',
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
        borderWidth: 3,
        borderColor: "#66B2FF",
        borderRadius: 35,
    },
    name: {
        marginTop: 6,
        fontSize: 12,
        color: '#b6bec9',
    },
    Trandingcontainer: {
        marginVertical: 20,
    },
    Trandingheading: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 12,
        color: 'white'
    },
    // bookCard: {
    //     marginRight: 12,
    //     borderRadius: 10,
    //     overflow: 'hidden',
    // },
    bookCard: {
        width: 180,
        height: 240,
        borderRadius: 38,
        marginRight: 16,
        overflow: "hidden", // ensures image respects borderRadius
        backgroundColor: "#000", // fallback color
    },
    cardImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover", 
    },
    ratingBadge: {
        position: "absolute",
        top: 10,
        left: 10,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#3d47514d",
        backgroundColor: "14171acc", // transparent bg like in your design
    },
    ratingText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
    },
    overlay: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 12,
        backgroundColor: "rgba(24, 24, 24, 0.4)", // semi-transparent gradient effect
    },
    title: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    subtitle: {
        color: "#ddd",
        fontSize: 13,
        marginTop: 2,
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