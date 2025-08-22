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
const Prosetion = () => {
    const insets = useSafeAreaInsets()
    return (
        <ScrollView style={[styles.container,{paddingTop: insets.top}]} contentContainerStyle={{ alignItems: "center" }}>
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
                Access the most advanced AI research assistant
            </Text>

            {/* Features */}
            <View style={styles.featureList}>
                {[
                    "Ads Free!",
                    "Unlimited AI Generations",
                    "Unlimited Pro Sketches",
                    "Cloud Storage for Your Projects",
                ].map((item, index) => (
                    <View key={index} style={styles.featureItem}>
                        <MaterialIcons name="check-box" size={22} color="#00BFFF" />
                        <Text style={styles.featureText}>{item}</Text>
                    </View>
                ))}
            </View>

            {/* Silver Plan Card */}
            <View style={styles.card}>
                <Text style={styles.planTitle}>Silver</Text>
                <Text style={styles.planPrice}>Rs:- 149/-</Text>
                <Text style={styles.planSubtitle}>Pro benefits</Text>

                <View style={styles.benefitItem}>
                    <MaterialIcons name="check" size={20} color="#00BFFF" />
                    <Text style={styles.benefitText}>Listing And Reading</Text>
                </View>
                <View style={styles.benefitItem}>
                    <MaterialIcons name="check" size={20} color="#00BFFF" />
                    <Text style={styles.benefitText}>Ad Free</Text>
                </View>

                <TouchableOpacity style={styles.upgradeBtn}>
                    <Text style={styles.upgradeText}>Upgrade Now {">"}</Text>
                </TouchableOpacity>
            </View>

            {/* View More Packs */}
            <TouchableOpacity style={styles.moreBtn}>
                <Text style={styles.moreText}>View More Packs {">"}</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Prosetion

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
    backgroundColor: "#00BFFF",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
  },
  restoreText: {
    color: "#fff",
    fontWeight: "600",
  },
  title: {
    fontSize: 22,
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
    backgroundColor: "#A78BFA",
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
  },
  planTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  planPrice: {
    fontSize: 16,
    color: "#fff",
    marginTop: 4,
  },
  planSubtitle: {
    marginTop: 10,
    fontWeight: "600",
    color: "#fff",
  },
  benefitItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  benefitText: {
    marginLeft: 8,
    color: "#fff",
  },
  upgradeBtn: {
    backgroundColor: "#00BFFF",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  upgradeText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  moreBtn: {
    backgroundColor: "#00BFFF",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    width: "85%",
    marginTop: 30,
    marginBottom: 50,
  },
  moreText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});