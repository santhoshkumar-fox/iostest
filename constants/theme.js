import { Dimensions } from "react-native";
import {RFPercentage} from "react-native-responsive-fontsize"
const { width, height } = Dimensions.get("window");
export const COLORS = {
  primarColor:   "rgba(0, 188, 228, 1)",
  primarColor90:   "rgba(0, 188, 228, .9)",
  primarColor80: "rgba(0, 188, 228, .8)",
  primarColor70: "rgba(0, 188, 228, .7)",
  primarColor60: "rgba(0, 188, 228, .6)",
  primarColor50: "rgba(0, 188, 228, .5)",
  primarColor15: "rgba(0, 188, 228, .3)",
  primarColor10: "rgba(0, 188, 228, .1)",

  secondaryColor:   "rgba(0, 115, 174, 1)",
  secondaryColor90: "rgba(0, 115, 174, .9)",
  secondaryColor80: "rgba(0, 115, 174, .8)",
  secondaryColor70: "rgba(0, 115, 174, .7)",
  secondaryColor60: "rgba(0, 115, 174, .6)",
  secondaryColor50: "rgba(0, 115, 174, .5)",
  secondaryColor40: "rgba(0, 115, 174, .4)",
  secondaryColor30: "rgba(0, 115, 174, .3)",
  secondaryColor15: "rgba(0, 115, 174, .15)",
  
  departedColor:"#0093AF",
  light01: "rgba(229, 241, 247, 0.5)",
  light02: "#BFDCEB",

};

export const SIZE = {
  font: 14,
  radius: 12,
  padding: 24,
  margin: 20,

  // font sizes
  
  h0:RFPercentage(2.5),
  h1:RFPercentage(2),
  h2:RFPercentage(1.8),
  h3:RFPercentage(1.35),
  h4:RFPercentage(1.1),

  

  // app dimensions
  width,
  height,
};

// export const FONT = {
//   largeTitle: { fontFamily: "Poppins-Black", fontSize: SIZE.largeTitle },
//   h1: { fontFamily: "Poppins-Bold", fontSize: SIZE.h1, lineHeight: 36 },
//   h2: { fontFamily: "Poppins-Bold", fontSize: SIZE.h2, lineHeight: 30 },
//   h3: { fontFamily: "Poppins-SemiBold", fontSize: SIZE.h3, lineHeight: 22 },
//   h4: { fontFamily: "Poppins-SemiBold", fontSize: SIZE.h4, lineHeight: 22 },
//   h5: { fontFamily: "Poppins-SemiBold", fontSize: SIZE.h5, lineHeight: 22 },
//   body1: {
//     fontFamily: "Poppins-Regular",
//     fontSize: SIZE.body1,
//     lineHeight: 36,
//   },
//   body2: {
//     fontFamily: "Poppins-Regular",
//     fontSize: SIZE.body2,
//     lineHeight: 30,
//   },
//   body3: {
//     fontFamily: "Poppins-Regular",
//     fontSize: SIZE.body3,
//     lineHeight: 22,
//   },
//   body4: {
//     fontFamily: "Poppins-Regular",
//     fontSize: SIZE.body4,
//     lineHeight: 22,
//   },
//   body5: {
//     fontFamily: "Poppins-Regular",
//     fontSize: SIZE.body5,
//     lineHeight: 22,
//   },
// };

export default apptheam = { COLORS, SIZE };
