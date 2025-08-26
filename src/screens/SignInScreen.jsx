import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  Alert,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


const SignInScreen = ({ navigation }) => {
  const [usernames, setusernames] = useState('');
  const [password, setpassword] = useState('');
  const insets = useSafeAreaInsets();

  const signinbutton = () => {
    if (!usernames || !password) {
      Alert.alert('please put username and password');
    } else {
      navigation.replace('Tabs');
    }
  };

  return (
    <>
      {/* Transparent StatusBar */}
      <StatusBar translucent backgroundColor="#0f1214" barStyle="light-content" />

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
          <MaterialIcons name="arrow-back-ios" size={22} color="#fff" />
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

        {/* Sign In Button with Gradient */}
        <TouchableOpacity style={styles.button} onPress={signinbutton} >

          <Text style={styles.buttonText}>Sign in</Text>

        </TouchableOpacity>

        {/* OR Sign In With */}
        <Text style={styles.orText}>or Sign In with</Text>

        {/* Social Icons */}
        <View style={styles.socialContainer}>
          <View style={styles.iconWrapper}>
            <Image source={require('../assets/Google_logo.png')} style={styles.socialIcon} />
          </View>
          <View style={styles.iconWrapper}>
            <Image source={require('../assets/f.png')} style={styles.socialIcon} />
          </View>
          <View style={styles.iconWrapper}>
            <Image source={require('../assets/Apple_logo.png')} style={styles.socialIcon} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1214',
    paddingHorizontal: 30,
  },
  backButton: {
    marginBottom: 30,
    marginTop: 50,
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
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    backgroundColor: '#0073e6',
    marginTop: 10, marginBottom: 30
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
