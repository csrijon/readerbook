import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Alert
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView,useSafeAreaInsets } from "react-native-safe-area-context";

const SettingsScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets()

  const showalart = () => {
    Alert.alert('Log out of your Acccount?',
      'Are you sure?',
      [
        {text:'cancel',style:'cancel'},
        {text:'ok',onPress:()=>console.log('done'),style:'default'}
      ]
    )
  }
  
  return (
    <SafeAreaView style={[styles.safeArea,{paddingTop:insets.top}]} >
      <StatusBar translucent backgroundColor="#0f1214" barStyle="light-content" />

      <ScrollView style={[styles.container,{}]} contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <MaterialIcons name="arrow-back-ios" size={22} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Settings</Text>
          <View style={{ width: 22 }} />
        </View>

        {/* Profile Card */}
        <TouchableOpacity>
          <View style={styles.profileCard}>
            <Image
              source={require('../assets/me.png')}
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.profileName}>Srijon Chowdhury</Text>
              <Text style={styles.profileEmail}>csrijon92@gmail.com</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Menu Card */}
        <View style={styles.menuCard}>
          <TouchableOpacity style={styles.row}>
            <MaterialIcons name="person-outline" size={22} color="#fff" style={styles.rowIcon} />
            <Text style={styles.rowText}>Account</Text>
          </TouchableOpacity>
          <View style={styles.divider} />

          <TouchableOpacity style={styles.row}>
            <MaterialIcons name="history" size={22} color="#fff" style={styles.rowIcon} />
            <Text style={styles.rowText}>History</Text>
          </TouchableOpacity>
          <View style={styles.divider} />

          <TouchableOpacity style={styles.row}>
            <MaterialIcons name="lock-outline" size={22} color="#fff" style={styles.rowIcon} />
            <Text style={styles.rowText}>Privacy</Text>
          </TouchableOpacity>
          <View style={styles.divider} />

          <TouchableOpacity onPress={showalart} style={styles.row}>
            <MaterialIcons name="logout" size={22} color="#fff" style={styles.rowIcon} />
            <Text style={styles.rowText}>Log Out</Text>
          </TouchableOpacity>
          <View style={styles.divider} />

          <TouchableOpacity onPress={()=>navigation.navigate('Dload')} style={styles.row}>
            <MaterialIcons name="download" size={22} color="#fff" style={styles.rowIcon} />
            <Text style={styles.rowText}>Downloads</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0f1214", 
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    marginBottom: 30,
    paddingLeft: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111",
    padding: 15,
    borderRadius: 12,
    marginBottom: 25,
  },
  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 30,
    marginRight: 15,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  profileEmail: {
    fontSize: 14,
    color: "#aaa",
    marginTop: 2,
  },
  menuCard: {
    backgroundColor: "#111",
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  rowIcon: {
    marginRight: 20,
  },
  rowText: {
    fontSize: 15,
    color: "#fff",
  },
  divider: {
    height: 1,
    backgroundColor: "#333",
  },
});

export default SettingsScreen;
