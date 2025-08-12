import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const SignInScreen = () => {
  const insets = useSafeAreaInsets();

  // ✅ OnePlus-safe top inset calculation
  const topInset =
    insets.top && insets.top > 0
      ? insets.top
      : Platform.OS === 'android'
        ? StatusBar.currentHeight || 24 // fallback
        : 0;

  return (
    <>
      {/* Make StatusBar transparent & overlay content */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <SafeAreaView
        edges={['top', 'left', 'right', 'bottom']} // force all edges
        style={[
          styles.container,
          {
            paddingTop: topInset,
            paddingBottom: insets.bottom,
          },
        ]}
      >
        {/* Back Arrow */}
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backArrow}>{'\u2190'}</Text>
        </TouchableOpacity>

        {/* Sign In Title */}
        <Text style={styles.title}>Sign In</Text>

        {/* Username Input */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#bbb"
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#bbb"
          secureTextEntry
        />

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.button}>
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
    backgroundColor: '#220052',
    paddingHorizontal: 30,
  },
  backButton: {
    marginBottom: 30,
  },
  backArrow: {
    fontSize: 24,
    color: '#fff',
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
