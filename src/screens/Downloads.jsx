import React from "react";
import { StyleSheet, TouchableOpacity, View,Text } from "react-native";
import { SafeAreaView,useSafeAreaInsets } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Downloads = () => {
    const insets = useSafeAreaInsets()
    return (
        <SafeAreaView style={[styles.container,{paddingTop:insets.top}]} >
            <TouchableOpacity style ={styles.bakicon} >
                <MaterialIcons name="arrow-back-ios" size={22} color="#fff" />
            </TouchableOpacity>
            <View>
             
            </View>
        </SafeAreaView>
    )
}
export default Downloads


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f1214',
        paddingHorizontal: 20
    },
    
})