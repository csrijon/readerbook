import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, StatusBar, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { FacebookIcon, GoogleIcon, AppleIcon } from '../components/SocialIcons';

const SignUpScreen = ({ navigation }) => {
  const [email, setemail] = useState('')
  const [name, setname] = useState('')
  const [password, setpassword] = useState('')
  const insets = useSafeAreaInsets();

  const signuppress = () => {
    if (!name || !email || !password) {
      Alert.alert('please filled the form')
    } else {
      navigation.navigate("signin")
    }
  }

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        }
      ]}
    >
      <StatusBar translucent backgroundColor="#0f1214" barStyle="light-content" />

      {/* Back Arrow */}
      <TouchableOpacity style={styles.backArrow} onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back-ios" size={22} color="#fff" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Create New Account</Text>

      {/* Input Fields */}
      <TextInput style={styles.input} value={name} onChangeText={setname} placeholder="Full name" placeholderTextColor="#ccc" />
      <TextInput style={styles.input} value={email} onChangeText={setemail} placeholder="Email" placeholderTextColor="#ccc" keyboardType="email-address" />
      <TextInput style={styles.input} value={password} onChangeText={setpassword} placeholder="Password" placeholderTextColor="#ccc" secureTextEntry />

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signupButton} onPress={signuppress} >
        <Text style={styles.signupText}>Sign up</Text>
      </TouchableOpacity>

      {/* Or Sign In With */}
      <Text style={styles.signinText}>or Sign In with</Text>

      {/* Social Buttons */}
      <View style={styles.socialContainer}>
        <View style={styles.iconWrapper}>
          <TouchableOpacity onPress={() => console.log("Facebook pressed")}>
            <FacebookIcon size={24} color={'#66B2FF'} />
          </TouchableOpacity>
        </View>

        <View style={styles.iconWrapper}>
          <TouchableOpacity onPress={() => console.log("Google pressed")}>
            <GoogleIcon size={24} color={'#66B2FF'} />
          </TouchableOpacity>
        </View>

        <View style={styles.iconWrapper}>
          <TouchableOpacity onPress={() => console.log("Apple pressed")}>
            <AppleIcon size={28} color={'#66B2FF'} />
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1214',
    paddingHorizontal: 30,
  },
  backArrow: {
    marginBottom: 30,
    marginTop: 50
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color: 'white',
    marginBottom: 25,
    paddingVertical: 5,
  },
  signupButton: {
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    backgroundColor: '#0073e6'
  },
  signupText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signinText: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 30,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderColor: '#30384080',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  socialIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  }
});
