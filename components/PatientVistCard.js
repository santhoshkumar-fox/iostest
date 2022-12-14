import { StyleSheet, Text, View } from "react-native";
// import NetInfo from "@react-native-community/netinfo";
import React from "react";
import { COLORS, SIZE } from "./../constants/theme";
import { Box } from 'native-base';

const PatientVistCard = () => {
  
  return (
    <Box  style={styles.maincontainer}>
      <Text style={{ color: "#2b2b2b", fontWeight: "600",position:"absolute",top:18,fontSize:SIZE.h4}}>
        Patient Visit Summary
      </Text>
      <View style={{ flexDirection: "row" ,marginTop:12}}>
        <Card2 title={"Arrived"} count={30} />
        <Card2 title={"Waiting"} count={50} />
        <Card2 title={"Testing"} count={16} />
      </View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Card2 title={"Consulting"} count={12} />
        <Card2 title={"Billing"} count={10} />
        <Card2 title={"Departed"} count={120} />
      </View>
    </Box>
  );
};

const Card2 = ({ title, count }) => {
  return (
    <View
      style={{
        width: 90,
        height: 100,
        backgroundColor: COLORS.secondaryColor80,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5,
      }}
    >
      <Text style={{ color: "white", fontSize: SIZE.h3, fontWeight: "500" }}>
        {title}
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: SIZE.h0,
          fontWeight: "800",
          marginTop: 10,
        }}
      >
        {count}
      </Text>
    </View>
  );
};

const Card = ({ title, count, bgColor }) => {
  return (
    <View style={[styles.cardContainer, { backgroundColor: bgColor }]}>
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={styles.cardCount}>
        <Text style={styles.cardCountText}>{count}</Text>
      </View>
    </View>
  );
};

export default PatientVistCard;
const cardColor = {
  ArrivedColor: "lightblue",
  WaitingColor: "",
  TestingColor: "",
  ConsultingColor: "",
  BillingColor: "",
  Departed: "",
};
const styles = StyleSheet.create({
  maincontainer: {
    borderRadius:10,
    height: 320,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent:"center",
    paddingVertical:20,
    // elevation: 1,
    // backgroundColor:"red"
  },
  cardContainer: {
    flexDirection: "row",
    width: 300,
    height: 40,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.secondaryColor,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  cardTitle: {
    color: "white",
  },
  cardCountText: {
    color: "#2b2b2b",
    fontWeight: "600",
  },
  cardCount: {
    width: 50,
    borderRadius: 12,
    marginTop: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.secondaryColor,
    height: 25,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
