import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Prosetion = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      style={[styles.container, { paddingTop: insets.top }]}
      contentContainerStyle={{ alignItems: "center" }}
    >
      {/* Close + Restore Buttons */}
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeBtn}>
          <MaterialIcons name="close" size={24} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.restoreBtn}>
          <Text style={styles.restoreText}>Restore</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Unlimited Access</Text>
      <Text style={styles.subtitle}>
        Access the most advanced Books For Reading
      </Text>

      {/* Features */}
      <View style={styles.featureList}>
        {[
          "Ads Free!",
          "Unlimited AI Generations",
          "Unlimited Pro Sketches",
          "You Can Download Books",
        ].map((item, index) => (
          <View key={index} style={styles.featureItem}>
            <MaterialIcons name="check-box" size={22} color="#66b2ff" />
            <Text style={styles.featureText}>{item}</Text>
          </View>
        ))}
      </View  >

      {/* Silver Plan Card */}
      <View style={styles.card} >
        <Text style={styles.planTitle}>Silver</Text>
        <Text style={styles.planPrice}>Rs:- 149/-</Text>
        <Text style={styles.planSubtitle}>Pro benefits</Text>

        <View style={styles.benefitItem}>
          <MaterialIcons name="check" size={20} color="#66b2ff" />
          <Text style={styles.benefitText}>Listing And Reading</Text>
        </View>
        <View style={styles.benefitItem}>
          <MaterialIcons name="check" size={20} color="#66b2ff" />
          <Text style={styles.benefitText}>Ad Free</Text>
        </View>

        <TouchableOpacity style={styles.upgradeBtn}>
          <Text style={styles.upgradeText}>Upgrade Now {">"}</Text>
        </TouchableOpacity>
      </View>

      {/* View More Packs */}
      <TouchableOpacity onPress={() => navigation.navigate('Upgrade')} style={styles.moreBtn}>
        <Text style={styles.moreText}>View More Packs {">"}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Prosetion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f1214",
    color: 'white',
  },
  topRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  closeBtn: {
    padding: 5,
  },
  restoreBtn: {
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(102, 179, 255, 0.2)'
  },
  restoreText: {
    color: '#66b2ff',
    fontWeight: "600",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    color: "white",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
    color: "#b6bec9",
    paddingHorizontal: 30,
  },
  featureList: {
    marginTop: 20,
    width: "85%",
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  featureText: {
    fontSize: 15,
    marginLeft: 10,
    color: "#b6bec9",
  },
  card: {
    width: "85%",
    borderRadius: 22,
    padding: 20,
    marginTop: 20,
    // shadowColor: "#000",
    // shadowOpacity: 0.1,
    // shadowOffset: { width: 0, height: 4 },
    backgroundColor: '#0d1924',
    // elevation: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#3d47514d'
  },
  planTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
  planPrice: {
    fontSize: 16,
    color: "#b6bec9",
    marginTop: 4,
  },
  planSubtitle: {
    marginTop: 10,
    fontWeight: "600",
    color: "white",
  },
  benefitItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  benefitText: {
    marginLeft: 8,
    color: "#b6bec9",
  },
  upgradeBtn: {
    backgroundColor: "#0068d0",
    paddingVertical: 14,
    borderRadius: 28,
    alignItems: "center",
    marginTop: 20,
    // shadowColor: "#000",
    shadowOpacity: 0.15,
    // shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(102, 179, 255, 0.2)'
  },
  upgradeText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  moreBtn: {
    backgroundColor: "#0073e6",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    width: "85%",
    marginTop: 30,
    marginBottom: 50,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  moreText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});
