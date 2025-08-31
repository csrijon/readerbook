import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    StatusBar,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';


const BookDetailsScreen = ({ navigation }) => {
    const insets = useSafeAreaInsets()
    return (
        <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
            <StatusBar translucent backgroundColor="#0f1214" barStyle="dark-content" />
            {/* Header */}
            <View style={styles.headerContainer}>
                {/* Back Button */}
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
                    <MaterialIcons name="arrow-back-ios" size={22} color="#fff" />
                </TouchableOpacity>

                {/* Share Button */}
                <TouchableOpacity style={styles.iconButton}>
                    <MaterialIcons name="ios-share" size={22} color="#fff" />
                </TouchableOpacity>
            </View>

            <View style={styles.topSection}>

                {/* Book Image */}
                <Image
                    source={require("../assets/image7.png")}
                    style={styles.bookImage}
                    resizeMode="contain"
                />

                {/* Reading / Listening Tabs */}
                <View style={styles.tabContainer}>
                    {/* Reading */}
                    <TouchableOpacity style={styles.tabButton}>
                        <MaterialIcons name="menu-book" size={18} color="#fff" />
                        <Text style={styles.tabText}> Reading</Text>
                    </TouchableOpacity>

                    {/* Divider */}
                    <View style={styles.divider} />

                    {/* Listening */}
                    <TouchableOpacity onPress={() => navigation.navigate('Audio')} style={styles.tabButton}>
                        <Ionicons name="headset-outline" size={18} color="#fff" />
                        <Text style={styles.tabText}> Listening</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Bottom White Section */}
            <ScrollView style={styles.bottomSection}>
                <Text style={styles.bookTitle}>Atomic Habits by James Clear</Text>
                <View style={styles.ratingRow}>
                    <MaterialIcons name="star" size={18} color="red" />
                    <Text style={styles.rating}>4.9</Text>
                    <Text style={styles.reviews}>  180 Reviews</Text>
                </View>

                {/* Summary */}
                <Text style={styles.summaryTitle}>Summary</Text>
                <Text style={styles.summaryText}>
                    Atomic Habits by James Clear is a comprehensive, practical guide on
                    how to change your habits and get 1% better every day. Using a
                    framework called the Four Laws of Behavior Change.
                </Text>
            </ScrollView>

            {/* Bottom Navigation */}
        </SafeAreaView>
    );
};

export default BookDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f1214'
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingBottom: 10,
    },
    iconButton: {
        padding: 5,
    },
    topSection: {
        // paddingTop: 70,
        paddingHorizontal: 16,
        alignItems: "center",
        position: "relative",
        paddingBottom: 70,
    },
    backButton: {
        position: "absolute",
        top: 45,
        left: 16,
        padding: 5,
    },
    shareButton: {
        position: "absolute",
        top: 45,
        right: 16,
        padding: 5,
    },
    bookImage: {
        width: 180,
        height: 250,
        marginTop: 20,
        borderRadius: 8,
    },
    tabContainer: {
        position: "absolute",
        bottom: -22,
        flexDirection: "row",
        backgroundColor: "#14171acc",
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#3d47514d',
        borderRadius: 30,
        overflow: "hidden",
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    tabButton: {
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 14,
        alignItems: "center",

    },
    activeTab: {
        borderBottomLeftRadius: 30,
    },
    activeTabText: {
        color: "#fff",
        fontWeight: "bold",
    },
    tabText: {
        color: "#fff",
        marginLeft: 5,
    },
    divider: {
        width: 1,
        height: "60%",
        backgroundColor: "#fff",
    },
    bottomSection: {
        paddingHorizontal: 16,
        paddingTop: 40,
    },
    bookTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
        color: "#ffffff",
    },
    ratingRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    rating: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#ffffff",
        marginLeft: 3,
    },
    reviews: {
        fontSize: 14,
        color: "#b6bec9",
    },
    summaryTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 6,
        color: "#ffffff",
    },
    summaryText: {
        fontSize: 14,
        lineHeight: 20,
        color: "#b6bec9",
    },
    bottomNav: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 10,
        backgroundColor: "#4B2BAA",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    navText: {
        color: "#fff",
        fontSize: 12,
        marginTop: 2,
    },
});
