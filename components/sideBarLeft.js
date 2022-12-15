import {StyleSheet,Text,View,TouchableOpacity,} from "react-native";
import React, {  useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { useEffect } from "react";
import Animated, {useSharedValue,withTiming,useAnimatedStyle,interpolate,FadeInDown,Extrapolation,Layout,} from "react-native-reanimated";
import { SIZE } from "../constants";


const SideBarLeft_WIDTH = SIZE.width * 0.7;
const SideBarLeft = () => {
  const dummyData = [
    "Medical History",
    "Ophthamalogy History",
    "Allergy Info",
    "Healthcare Fund/Medicare",
    "Family Info",
    "Previous Viest",
    "General",
  ];
  const [index, setIndex] = useState();
  const [showLeftSideBarLeftd, setShowLeftSideBarLeft] = useState(false);

  useEffect(() => {
    changeanimation();
  }, []);

  const animationvalue = useSharedValue(0);

  const changeanimation = () => {
    if (showLeftSideBarLeftd) {
      animationvalue.value = withTiming(0);
    } else {
      animationvalue.value = withTiming(1);
    }
    setShowLeftSideBarLeft(!showLeftSideBarLeftd);
  };

  const animatedStyles = useAnimatedStyle(() => {
    const translation = interpolate(
      animationvalue.value,
      [0, 1],
      [0, -SideBarLeft_WIDTH * 1.01],
      { extrapolateRight: Extrapolation.CLAMP }
    );

    return {
      transform: [{ translateX: translation }],
    };
  });

  const animatedStylesRotate = useAnimatedStyle(() => {
    const arrowRotate = interpolate(animationvalue.value, [0, 1], [0, 180]);
    return {
      // error acuire when driectly use 180deg
      transform: [{ rotate: `${arrowRotate}deg` }],
    };
  });
  return (
    <View style={styles.mainContainer}>
      {/* side bar */}
      <Animated.View style={[styles.SideBarLeftcon, animatedStyles, styles.shadow]}>
        {/* inner cards */}
        <Animated.View style={{ width: "100%" }}>
          {dummyData.map((e, _index) => {
            return (
              <SideCard
                key={_index}
                title={e}
                cardIndex={_index + 1}
                index={index}
                setIndex={setIndex}
              />
            );
          })}
        </Animated.View>
        <View style={[styles.toggleBtn]}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={changeanimation}
            style={{
              width: 100,
              height: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Animated.View style={animatedStylesRotate}>
              <Entypo name="chevron-thin-left" size={20} color="white" />
            </Animated.View>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

export default SideBarLeft;
const SideCard = ({ title, cardIndex, index, setIndex }) => {
  const changevalue = () => {
    if (index === cardIndex) {
      setIndex(0);
    } else {
      setIndex(cardIndex);
    }
  };

  return (
    <Animated.View
      style={[styles.sideCard, { overflow: "hidden" }, styles.shadow]}
      layout={Layout.duration(300)}
      entering={FadeInDown}
    >
      <TouchableOpacity
        activeOpacity={0.9}
        style={[
          styles.cardHeader,
          index == cardIndex && { backgroundColor: "rgba(0, 115, 174, .1)" },
        ]}
        onPress={changevalue}
      >
        <Text style={[styles.cardText]}>{title}</Text>
        <View
          style={index === cardIndex && { transform: [{ rotate: "180deg" }] }}
        >
          <Entypo
            name="chevron-thin-down"
            size={20}
            style={{ opacity: 0.5 }}
            color="#2b2b2b"
          />
        </View>
      </TouchableOpacity>
      {index === cardIndex && (
        <View style={{ margin: 20 }}>
          <Text>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It
          </Text>
        </View>
      )}
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  SideBarLeftcon: {
    position: "absolute",
    // bottom:(height*.5) -(height*.6/2),
    width: SideBarLeft_WIDTH,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 5,
    alignItems: "center",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  sideCard: {
    flex: 1,
    borderRadius: 2,
    backgroundColor: "#ecf5f8",
    alignItems: "center",
    marginVertical: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "grey",
    justifyContent: "center",
  },
  cardText: {
    fontSize: 16,
    color: "#2b2b2b",
    fontWeight: "600",
  },
  toggleBtn: {
    position: "absolute",
    top: 15,
    borderRadius: 7,
    right: -30,
    width: 30,
    height: 134,
    backgroundColor: "rgba(0, 0, 0, .7)",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    overflow: "hidden",
  },
  cardHeader: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.7,
    elevation: 5,
  },
});
