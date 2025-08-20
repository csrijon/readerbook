import React from "react";
import { View, TouchableOpacity, StyleSheet} from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";

const Bottomnav = () => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation()
    return (
        <View style={[styles.bottomNavWrapper, { paddingBottom: insets.bottom }]}>
            <View style={styles.bottomNav}>
                <TouchableOpacity onPress={()=> navigation.navigate('') }  ><MaterialIcons name="house" color="#ffffff" size={24} /></TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('search') }  ><MaterialIcons name="search" color="#ffffff" size={24} /></TouchableOpacity>
                <TouchableOpacity><MaterialIcons name="bookmark-border" color="#ffffff" size={24} /></TouchableOpacity>
            </View>
        </View>
    )
}

export default Bottomnav;

const styles = StyleSheet.create({
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 12,
        borderTopWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#4B2BAA',
    },
    bottomNavWrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#4B2BAA'
    }
})