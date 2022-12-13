import {StyleSheet,Text,View,Dimensions,TouchableOpacity,} from "react-native";
import React, { useState } from "react";
import Animated, { Layout, FadeOut, FadeIn,useSharedValue,useAnimatedStyle,withTiming,interpolate,Extrapolate,Extrapolation } from "react-native-reanimated";
import { COLORS, SIZE } from "./../constants/theme";
import {Entypo} from "@expo/vector-icons"
// in future use community useDimension for orientaion enhancement
const SIZEWIDTH = SIZE.width * 0.24;
const CARDCOLOR = "white";
const dummyData = [
  "Incoming Correspondences",
  "Outgoing Correspondences",
  "Investigation",
  "Financial",
];
const dummyContentData = ["Referrals", "Consent Forms", "Doctor Letter"];

// MC


const SideBarRight = ({onPress,setShowLeftSideBard,showLeftSideBard}) => {
  const [index, setIndex] = useState(dummyData.length - 1);

  const animationvalue = useSharedValue(0);

  const changeanimation = () => {
    if (showLeftSideBard) {
      animationvalue.value = withTiming(0);
    } else {
      animationvalue.value = withTiming(1);
    }
    setShowLeftSideBard(!showLeftSideBard);
  };

  const animatedStyles = useAnimatedStyle(() => {
    const translation = interpolate(
      animationvalue.value,
      [0, 1],
      [0, SIZEWIDTH+20],
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
  const animatedToggle = useAnimatedStyle(() => {
    const arrowRotate = interpolate(animationvalue.value, [0, 1], [0, -SIZEWIDTH-20]);
    return {
      // error acuire when driectly use 180deg
      transform: [{ translateX: arrowRotate }],
      
    };
  });


  return (
    <Animated.View style={[styles.mainContainer, styles.shadow,animatedStyles, { shadowOpacity: 0.1 ,overflow:"visible"},]}>
      {dummyData.map((e, i) => {
        return (
          <Card
            title={e}
            key={i}
            cardId={i}
            index={index}
            setIndex={setIndex}
            onPress={onPress}
          />
        );
      })}
     <Animated.View style={[animatedToggle,styles.toggleBtn]}>
     <TouchableOpacity style={[{width:50,height:50,alignItems:'center',justifyContent:"center",borderRadius:25}]} onPress={changeanimation}>
      <Animated.View style={animatedStylesRotate}>
          <Entypo name="chevron-thin-right" size={20} color="rgba(0, 0, 0, .7)" />
      </Animated.View>
      </TouchableOpacity>
     </Animated.View>
    </Animated.View>
  );
};

// 
const Card = ({ title, cardId, index, setIndex,onPress}) => {
  return (
    <Animated.View
      layout={Layout.duration(300)}
      style={[styles.shadow]}
    >
      <TouchableOpacity
        activeOpacity={0.9}
        style={[
          styles.card,
          cardId !== 1 && { transform: [{ translateY: -(cardId * 1) }] },
          { overflow: "hidden" },
        ]}
        onPress={() => {
          setIndex(cardId);
          if (index === cardId) {
            setIndex(13);
          }
        }}
      >
        <Text style={styles.cardText}>{title}</Text>
        {cardId === index && (
          <Animated.View
            Layout={Layout.duration(800)}
            style={{ width: "100%", padding: 30 }}
          >
            {dummyContentData.map((e, i) => {
              // console.log("index :",i)
              return (
                <Animated.View entering={FadeIn.delay(100*i+1)} key={i} style={styles.cardContent}>
                
                 <TouchableOpacity onPress={onPress}>
                 <Text
                    style={[
                      styles.cardContentText,
                      i === 0 && {
                        color: COLORS.secondaryColor,
                        borderBottomColor: COLORS.secondaryColor,
                      },
                    ]}
                  >
                    {e}
                  </Text>
                 </TouchableOpacity>
                </Animated.View>
              );
            })}
          </Animated.View>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};
export default SideBarRight;
const styles = StyleSheet.create({
  mainContainer: {
    width: SIZEWIDTH,
    marginTop: 18,
    marginRight: 20,
    position: "absolute",
    right: 0,
    backgroundColor: CARDCOLOR,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    overflow:'hidden',
  },
  toggleBtn: {
    position: "absolute",
    top: 0,
    right:-24,
    borderRadius: 7,
    width: 30,
    height: 90,
    // backgroundColor: "rgba(0, 0, 0, .7)",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  card: {
    // borderWidth:StyleSheet.hairlineWidth,
    borderColor: "grey",
    width: "100%",
    backgroundColor: CARDCOLOR,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderRadius: 10,
    padding: 10,
    paddingVertical: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  cardText: {
    fontSize: 14,
    fontWeight: "700",
    color: "black",
    opacity: 0.8,
    marginHorizontal: 20,
  },
  shadow: {
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 0,
  },
  cardContent: {
    paddingVertical: 3,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderBottomWidth:StyleSheet.hairlineWidth,
    borderColor: "grey",
  },
  cardContentText: {
    color: "rgba(94, 94, 94, 1)",
  },
});
