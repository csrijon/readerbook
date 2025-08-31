import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  StatusBar,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView,useSafeAreaInsets } from "react-native-safe-area-context";
import Slider from "@react-native-community/slider";

const AudioBookPlayer = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <StatusBar translucent backgroundColor="#000000" barStyle="light-content" />

      {/* Top Section */}
      <View style={styles.topcontainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={22} color="#66B2FF" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="notifications" size={22} color="#66B2FF" />
        </TouchableOpacity>
      </View>

      {/* Book Image */}
      <View style={styles.imgcontainer}>
        <Image
          style={styles.img}
          source={require("../assets/Rectangle396.png")}
        />
      </View>

      {/* Title + Like */}
      <View style={styles.Namesection}>
        <View style={styles.Textsection}>
          <Text style={styles.Boldtext}>ATOMIC HABITS</Text>
          <Text style={styles.normal}>James Clear</Text>
        </View>
        <TouchableOpacity>
          <MaterialIcons name="favorite" size={22} color="#66B2FF" />
        </TouchableOpacity>
      </View>

      {/* Seekbar */}
      <Slider
        style={styles.seekbar}
        minimumValue={0}
        maximumValue={500}
        minimumTrackTintColor="#66B2FF"
        maximumTrackTintColor="white"
        thumbTintColor="#66B2FF"
      />

      {/* Timeline */}
      <View style={styles.Timeline}>
        <Text style={styles.TimelineText}>4:25</Text>
        <Text style={styles.TimelineText}>1:25:00</Text>
      </View>

      {/* Play Controls */}
      <View style={styles.PlayMode}>
        <TouchableOpacity>
          <MaterialIcons name="replay-10" size={30} color="#66B2FF" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="skip-previous" size={30} color="#66B2FF" />
        </TouchableOpacity>

        <View style={styles.playButtonWrapper}>
          <TouchableOpacity>
            <MaterialIcons name="play-arrow" size={28} color="#66B2FF" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <MaterialIcons name="skip-next" size={30} color="#66B2FF" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="forward-10" size={30} color="#66B2FF" />
        </TouchableOpacity>
      </View>

      {/* Bottom Switch Tabs */}
      <View style={styles.bottomswitch}>
        <Text style={styles.bottamText}>Up next</Text>
        <Text style={styles.bottamText}>Lyrics</Text>
        <Text style={styles.bottamText}>Related</Text>
      </View>
    </SafeAreaView>
  );
};

export default AudioBookPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f1214",
    paddingHorizontal: 20,
  },
  topcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    // paddingTop:60,
  },
  imgcontainer: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 8,
  },
  Namesection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  Textsection: {
    flexDirection: "column",
    gap: 4,
  },
  Boldtext: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  normal: {
    color: "#b6bec9",
    fontSize: 14,
  },
  seekbar: {
    width: "100%",
    height: 40,
    marginVertical: 10,
  },
  Timeline: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TimelineText: {
    color: "#66B2FF",
    fontSize: 12,
  },
  PlayMode: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20,
    gap: 20,
  },
  playButtonWrapper: {
    backgroundColor: "#ffffff",
    borderRadius: 50,
    padding: 20,
  },
  bottomswitch: {
    marginTop: "auto", // pushes to bottom always
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  bottamText: {
    color: "#b6bec9",
    fontSize: 14,
  },
});
