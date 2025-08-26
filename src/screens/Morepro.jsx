import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useSafeAreaInsets } from "react-native-safe-area-context";


const PlanCard = ({ title, price, benefits, bgColor }) => (
  <View style={[styles.card, { backgroundColor: bgColor }]}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.price}>Rs: {price}/-</Text>

    <Text style={styles.benefitsTitle}>Pro benefits</Text>
    {benefits.map((benefit, index) => (
      <Text key={index} style={styles.benefit}>
        ✓ {benefit}
      </Text>
    ))}

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Upgrade Now </Text>
    </TouchableOpacity>
  </View>
);

const Morepro = ({navigation}) => {
  const insets = useSafeAreaInsets()
  return(
 <View style={[styles.container,{paddingTop: insets.top}]}>
      {/* Back Arrow */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={28} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Plans</Text>
      </View>

      <ScrollView contentContainerStyle={{ alignItems: "center", paddingBottom: 30 }}>
        {/* Silver */}
        <PlanCard
          title="Silver"
          price="149"
          benefits={["Listing And Reading", "Ad Free"]}
          bgColor="#C0C0C0" // Silver color
        />

        {/* Gold */}
        <PlanCard
          title="Gold"
          price="299"
          benefits={["All Silver Benefits", "Priority Support", "Exclusive Content"]}
          bgColor="#FFD700" // Gold color
        />

        {/* Platinum */}
        <PlanCard
          title="Platinum"
          price="499"
          benefits={[
            "All Gold Benefits",
            "One-on-One Mentorship",
            "Lifetime Access",
          ]}
          bgColor="#E5E4E2" // Platinum color
        />
      </ScrollView>
    </View>
  )
}

export default Morepro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f1114",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
    paddingTop:30,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    color:'white'
  },
  card: {
    padding: 20,
    borderRadius: 10,
    width: 300,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    marginVertical: 5,
  },
  benefitsTitle: {
    fontWeight: "bold",
    marginTop: 10,
  },
  benefit: {
    marginVertical: 2,
  },
  button: {
    backgroundColor: "#9b6ef3",
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
