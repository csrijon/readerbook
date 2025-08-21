import React from "react";
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Image, Text,StatusBar } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Slider from "@react-native-community/slider";


const AudioBookPlayer = ({navigation}) => {
    const insets = useSafeAreaInsets()
    return (
        <SafeAreaView style={[styles.container, { paddingTop: insets.top }]} >
           <StatusBar translucent backgroundColor="#6C3EB4" barStyle="dark-content" />
            {/* {Top Icon} */}
            <View style={styles.topcontainer} >
                {/* {back-arrow-button} */}
                <TouchableOpacity onPress={()=> navigation.goBack()} >
                    <MaterialIcons name="arrow-back-ios" size={22} color="#000000" />
                </TouchableOpacity>
                {/* {Notification icon} */}
                <TouchableOpacity>
                    <MaterialIcons name="notifications" size={22} color="#000000" />
                </TouchableOpacity>
            </View>
            {/* image section */}
            <View style={styles.imgcontainer} >
                <Image style={styles.img} source={require('../assets/Rectangle396.png')} />
            </View>
            {/* name and like section  */}
            <View style={styles.Namesection}  >
                <View style={styles.Textsection} >
                    <Text style={styles.Boldtext} >ATOMIC HABITS</Text>
                    <Text>James Clear</Text>
                </View>
                <TouchableOpacity>
                    <MaterialIcons name="favorite" size={22} color="#fff" />
                </TouchableOpacity>
            </View>
            {/* seekbar */}
            <Slider
                style={styles.seekbar}
                minimumValue={0}
                maximumValue={500}
                minimumTrackTintColor="#23085A"
                maximumTrackTintColor="#9D83D2"
                thumbTintColor="#23085A"
            />
            {/* Timeline */}
            <View style={styles.Timeline} >
                <Text  >4:25</Text>
                <Text>1:25:00</Text>
            </View>
            {/* playsection  */}
            <View style={styles.PlayMode}  >
                <TouchableOpacity>
                    <MaterialIcons name="replay-10" size={30} color="#23085A" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons name="skip-previous" size={30} color="#23085A" />
                </TouchableOpacity>
                <View style={styles.playButtonWrapper} >
                    <TouchableOpacity>
                        <MaterialIcons name="play-arrow" size={24} color="#23085A" />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity>
                    <MaterialIcons name="skip-next" size={30} color="#23085A" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <MaterialIcons name="forward-10" size={30} color="#23085A" />
                </TouchableOpacity>
            </View>
            {/* add switch */}
            <View style ={[styles.bottomswitch,{paddingBottom:insets.bottom}]} >
                <Text>Up next</Text>
                <Text>Lyrics</Text>
                <Text>Related</Text>
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
        color: '#000000'
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
        marginBottom: 50
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    Namesection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Textsection: {
        flexDirection: 'column',
        gap: 4,
    },
    Boldtext: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    seekbar: {
        width: '100%',
        height: 50,
    },
    Timeline: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    TimelineText: {
        color: '#23085A'
    },
    PlayMode: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30,
        gap: 20
    },
    playButtonWrapper: {
        backgroundColor: '#b19cd9',
        borderRadius: 50,
        padding: 15,
    },
    bottomswitch:{
        marginTop: 90,
        flexDirection:'row',
        justifyContent: 'space-around'
    }
})