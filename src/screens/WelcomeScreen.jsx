import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, Image } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

const WelcomeScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom }
      ]}
    >
      <StatusBar translucent backgroundColor="#0f1214" barStyle="light-content" />

      {/* Logo and Title */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/Vector.png')} style={styles.logo} />
        <Text style={styles.title}>ReadLink</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("signup")}>
         
            <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} >
          
            <Text style={styles.buttonText}>I have an account</Text>
         
        </TouchableOpacity>
      </View>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {Array.from({ length: 6 }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === 5 ? { backgroundColor: '#00FF84' } : null,
            ]}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1214',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 30,
  },
  button: {
    borderRadius: 30,
    paddingVertical: 15,
    marginVertical: 10,
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    backgroundColor:'#0073e6'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pagination: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
});

export default WelcomeScreen;
