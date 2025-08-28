import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const FacebookIcon = ({ size, color='#66B2FF' }) => {
    return (
        <FontAwesome name="facebook" size={size} color={color} />
    )
}

const GoogleIcon = ({ size, color='#66B2FF' }) => {
    return (
        <AntDesign name="google" size={size} color={color} />
    )
}

const AppleIcon = ({size,color='#66B2FF'}) => {
    return (
        <MaterialCommunityIcons name="apple" size={size} color={color} />
    )
}

export { FacebookIcon, GoogleIcon, AppleIcon }
