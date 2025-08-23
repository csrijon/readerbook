import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  // Platform,
  StatusBar,
  Alert,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const SignInScreen = ({ navigation }) => {

  const [usernames, setusernames] = useState('')
  const [password, setpassword] = useState('')

  const insets = useSafeAreaInsets();


  const signinbutton = () => {
    if (!usernames || !password) {
     Alert.alert('please put username and password')
    }else{
      navigation.replace('Tabs')
    }
  }

  return (
    <>
      {/* Make StatusBar transparent & overlay content */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <SafeAreaView
        style={[
          styles.container,
          {
            paddingBottom: insets.bottom,
          },
        ]}
      >
        {/* Back Arrow */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialIcons style name="arrow-back-ios" size={22} color="#fff" />
        </TouchableOpacity>

        {/* Sign In Title */}
        <Text style={styles.title}>Sign In</Text>

        {/* Username Input */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#bbb"
          value={usernames}
          onChangeText={setusernames}
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#bbb"
          secureTextEntry
          value={password}
          onChangeText={setpassword}
        />

        {/* Sign Up Button */}
        <TouchableOpacity onPress={signinbutton} style={styles.button}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>

        {/* OR Sign In With */}
        <Text style={styles.orText}>or Sign In with</Text>

        {/* Social Icons */}
        <View style={styles.socialContainer}>
          <View style={styles.iconWrapper}>
            <Image
              source={require('../assets/Google_logo.png')}
              style={styles.socialIcon}
            />
          </View>
          <View style={styles.iconWrapper}>
            <Image
              source={require('../assets/f.png')}
              style={styles.socialIcon}
            />
          </View>
          <View style={styles.iconWrapper}>
            <Image
              source={require('../assets/Apple_logo.png')}
              style={styles.socialIcon}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23085A',
    paddingHorizontal: 30,
  },
  backButton: {
    marginBottom: 30,
    marginTop: 50
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    paddingVertical: 10,
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#b58de6',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    marginTop: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  orText: {
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 15,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 30,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default SignInScreen;
