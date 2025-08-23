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
import LinearGradient from "react-native-linear-gradient";

const Prosetion = () => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      style={[styles.container, { paddingTop: insets.top }]}
      contentContainerStyle={{ alignItems: "center" }}
    >
      {/* Close + Restore Buttons */}
      <View style={styles.topRow}>
        <TouchableOpacity style={styles.closeBtn}>
          <MaterialIcons name="close" size={24} color="#000" />
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
            <MaterialIcons name="check-box" size={22} color="#9D83D2" />
            <Text style={styles.featureText}>{item}</Text>
          </View>
        ))}
      </View>

      {/* Silver Plan Card */}
      <LinearGradient
        colors={["#BCC6CC", "#E0E0E0"]}
        style={styles.card}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.planTitle}>Silver</Text>
        <Text style={styles.planPrice}>Rs:- 149/-</Text>
        <Text style={styles.planSubtitle}>Pro benefits</Text>

        <View style={styles.benefitItem}>
          <MaterialIcons name="check" size={20} color="#4A4A4A" />
          <Text style={styles.benefitText}>Listing And Reading</Text>
        </View>
        <View style={styles.benefitItem}>
          <MaterialIcons name="check" size={20} color="#4A4A4A" />
          <Text style={styles.benefitText}>Ad Free</Text>
        </View>

        <TouchableOpacity style={styles.upgradeBtn}>
          <Text style={styles.upgradeText}>Upgrade Now {">"}</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* View More Packs */}
      <TouchableOpacity style={styles.moreBtn}>
        <Text style={styles.moreText}>View More Packs {">"}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Prosetion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    backgroundColor: "#9D83D2",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  restoreText: {
    color: "#fff",
    fontWeight: "600",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
    color: "#555",
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
    color: "#333",
  },
  card: {
    width: "85%",
    borderRadius: 22,
    padding: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  planTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
  },
  planPrice: {
    fontSize: 16,
    color: "#444",
    marginTop: 4,
  },
  planSubtitle: {
    marginTop: 10,
    fontWeight: "600",
    color: "#333",
  },
  benefitItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  benefitText: {
    marginLeft: 8,
    color: "#333",
  },
  upgradeBtn: {
    backgroundColor: "#9D83D2",
    paddingVertical: 14,
    borderRadius: 28,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  upgradeText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  moreBtn: {
    backgroundColor: "#9D83D2",
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
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
