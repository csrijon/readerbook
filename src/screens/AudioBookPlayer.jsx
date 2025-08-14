import React from "react";
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const AudioBookPlayer = () => {
    const insets = useSafeAreaInsets()
    return (
        <SafeAreaView style={[styles.container, { paddingTop: insets.top }]} >
            {/* {Top Icon} */}
            <View style={styles.topcontainer} >
                {/* {back-arrow-button} */}
                <TouchableOpacity>
                    <MaterialIcons name="arrow-back-ios" size={22} color="#fff" />
                </TouchableOpacity>
                {/* {Notification icon} */}
                <TouchableOpacity>
                    <MaterialIcons name="notifications" size={22} color="#fff" />
                </TouchableOpacity>
            </View>
            {/* image section */}
            <View style={styles.imgcontainer} >
                <Image style={styles.img} source={require('../assets/Rectangle396.png')} />
            </View>
            {/* name and like section  */}
            <View style = {styles.Namesection}  >
                <View style = {styles.Textsection} >
                    <Text style = {styles.Boldtext} >ATOMIC HABITS</Text>
                    <Text>James Clear</Text>
                </View>
                <TouchableOpacity>
                    <MaterialIcons name="favorite" size={22} color="#fff" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default AudioBookPlayer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EADDFF',
        paddingHorizontal: 20,
        color:'#000000'
    },
    topcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 30,
        marginTop: 50,
    },
    imgcontainer: {
        width: '100%',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:50
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    Namesection:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    Textsection:{
        flexDirection:'column',
        gap:4,
    },
    Boldtext:{
     fontSize:14,
     fontWeight:'bold'
    }
})