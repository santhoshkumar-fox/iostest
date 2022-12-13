// import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons, Entypo,Feather } from "@expo/vector-icons";
import {SvgXml} from 'react-native-svg'
import { Box, Text, HStack } from "native-base";
import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { SketchCanvas } from "rn-sketch-save";
import {
  PatientInformationCard,
  MeteDataCard,
  Toolbar,
  ZoomableNormal,
  SideBar,
  SideBarRight,
  GoBack,
} from "../components";
// ⚠️ recycle waring apper will chage in future
import ChatBoxModel from "./../components/chatboxModel";
import { dumyData, images, COLORS, SIZE } from "../constants";
import DropDownPage from "../components/DropDownPage";
import Animated, {
// import { TouchableOpacity } from 'react-native';
  FadeIn,
  FadeOut,
  Layout,
  SlideInDown,
  SlideInRight,
  SlideInLeft,
  SlideInUp,
  SlideOutDown,
  BounceIn,
} from "react-native-reanimated";

const thumbSpacing = 10;
const thumbImageSize = 60;
const MainProfile = () => {
  const [currentSvg,setCurrentSvg] = useState([]);

  const [imageValue, setImageValue] = useState(4);
  const [isDraw, setIsDraw] = useState(true);
  const canvaRef = useRef(null);
  const [isShowThumbList, setIsShowThumbList] = useState(false);
  const [isScalling, setIsScalling] = useState(false);
  const [scaleWidth, setScalWidth] = useState(70);
  const [isRightSliderBar,setIsRightSliderBar] = useState(false);
  const [isROModel,setIsROModel] = useState(false);
  const [ROChildImage,setROChildImage] = useState(0);
  // save svgs 
  const [indicatorValue,setIndicatorValue] = useState([0,1,2,3]);
  const [savedFlatlistdata,setSavedFlatlistData] = useState([
    {imagevalue:0,svgvalue:""},
    {imagevalue:1,svgvalue:""},
    {imagevalue:2,svgvalue:""},
    {imagevalue:3,svgvalue:""},
    {imagevalue:4,svgvalue:""},
    {imagevalue:5,svgvalue:""},
  ])
  const saveSvg = (value)=>{
    if((value?.split('<path ').length)<=1){console.log("show some error for the changes not done")}else{
    let s_value = value;
    let rnsvgString = s_value.replace(/,/g,' ');
    let rnsvgString2 = rnsvgString.replace(/stroke/g,'fill');
    let splitpath = rnsvgString2.split('<path')
    let spltfinal = splitpath[splitpath.length-1].replace('</g>',' ')
    let spltfina2 = spltfinal.replace('</svg>',' ')
    splitpath.splice(0,1)
    splitpath.pop();
    splitpath.push(spltfina2)
    console.log("value :",splitpath);
    // setCurrentSvg([...currentSvg,...splitpath]);
    setSavedFlatlistData([...savedFlatlistdata,{imagevalue:imageValue,svgvalue:[...currentSvg,...splitpath]}])
    }
  }
const TopChildSvg = ()=>{
    const path = savedFlatlistdata[ROChildImage].svgvalue;
    let stringpath = '';
    path?.map((e)=>{
      stringpath = stringpath + `<path ${e}`
    })
    const svg = `<svg width="0" height="0">
    <rect width="0" height="0" fill="white"/>
  <g>
    ${stringpath}
    </g>
    </svg>`
  
  return(
    <SvgXml xml={svg} width={'100%'} height={'100%'}/>
    // null
  )
 }





  // Thumb FlateList

  const [active, setActive] = useState(0);

  // effects
  useEffect(() => {
    canvaRef?.current?.isDrawToggle();
  }, []);
  // rendering function
  const setscalling = useCallback(() => {
    setIsScalling((v) => {
      return !v;
    });
  }, []);
  const setterscalingwidth = useCallback(() => {
    setScalWidth((v) => {
      return v === 95 ? 70 : 95;
    });
  }, []);

  const thumListShow = () => {
    setIsShowThumbList(!isShowThumbList);
  };

  useEffect(() => {
    canvaRef?.current?.reset();
    setCurrentSvg([]);
    // console.log("Imagevalue",imageValue);
  }, [imageValue]);

  const FullScale = () => {
    return (
      <TouchableOpacity
        style={[
          {
            width: 30,
            height: 30,
            backgroundColor: COLORS.secondaryColor15,
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            right: 15,
            top: 15,
          },
        ]}
        onPress={() => {
          setscalling();
          setterscalingwidth();
        }}
      >
        <MaterialIcons
          name="crop-free"
          size={20}
          color={COLORS.secondaryColor60}
        />
      </TouchableOpacity>
    );
  };
  const Childcon = useCallback(
    ({ canvaRef }) => {
      return (
        <Animated.View
          layout={Layout.duration(300)}
          // multiple of 1.3 is actula scalling size fo A4 sheet resolution
          style={{ width: 574, height: 574 * 1.3 }}
        >
          <Image
            source={dumyData.imagevaluearr[imageValue]}
            // stretch for the page full view
            resizeMode={"stretch"}
            style={[{ width: "100%", height: "100%" }]}
          />
          <SketchCanvas
            ref={canvaRef}
            strokeColor={"black"}
            strokeWidth={1.5}
            containerStyle={[
              { flexGrow: 1, width: responsiveWidth(scaleWidth) },
              StyleSheet.absoluteFill,
            ]}
          />
          <View style={{}}>
            <ChatBoxModel />
          </View>
          {/* <TouchableOpacity style={{position:"absolute",width:40,height:40,bottom:0,alignItems:"center",justifyContent:"center"}}>
            <Entypo name="menu" size={24} color={COLORS.secondaryColor}/>
          </TouchableOpacity>

          <View style={{width:300,height:400,backgroundColor:"white",position:"absolute",bottom:0,left:0}}>
          <View style={{flexDirection:'row',width:"100%",paddingHorizontal:40,justifyContent:"space-between",alignItems:"center",marginTop:20}}>
              <Text>Item</Text>
              <Text>-</Text>
              <Text>Value</Text>
              </View>

              {indicatorValue.map((e,i)=>{

                return(
                  <View key={i} style={{flexDirection:'row',width:"100%",paddingHorizontal:10,justifyContent:"space-between",alignItems:"center",marginTop:20}}>
              <TextInput style={{width:100,paddingVertical:10,paddingHorizontal:10,borderRadius:5,borderWidth:StyleSheet.hairlineWidth,borderColor:COLORS.secondaryColor}}/>
              <Text>-</Text>
              <TextInput style={{width:100,paddingVertical:10,paddingHorizontal:10,borderRadius:5,borderWidth:StyleSheet.hairlineWidth,borderColor:COLORS.secondaryColor}}/>
              </View>
                )
              })}

              <TouchableOpacity style={{flexDirection:"row",borderRadius:5,width:80,height:40,backgroundColor:COLORS.secondaryColor,alignItems:"center",justifyContent:"space-between",paddingHorizontal:15,margin:10,marginTop:30}}
              onPress={()=>{
                setIndicatorValue([...indicatorValue,"add"])
              }}
              >
                <Text style={{color:"white"}}>Add</Text>
                <Ionicons name="add-circle" size={14} color="white" />
              </TouchableOpacity>
              <TouchableOpacity aty>

              </TouchableOpacity>
          </View> */}
          <FullScale />
        </Animated.View>
      );
    },
    [imageValue]
  );
  const ChildconModel = 
    ({ canvaRef }) => {
      return (
        <Animated.View
          layout={Layout.duration(300)}
          // multiple of 1.3 is actula scalling size fo A4 sheet resolution
          style={{ width: 574, height: 574 * 1.3 }}
        >
          <Image
            source={dumyData.imagevaluearr[savedFlatlistdata[ROChildImage].imagevalue]}
            // stretch for the page full view
            resizeMode={"stretch"}
            style={[{ width: "100%", height: "100%" },StyleSheet.absoluteFill]}
          />
      <TopChildSvg/>
        </Animated.View>
      );
    }
   

  return (
    <View style={styles.root}>
      <Text
        style={{
          textAlign: "center",
          color: "rgba(56, 55, 55, .8)",
          fontSize: 20,
          fontWeight: "800",
          marginTop: 40,
        }}
      >
        Wanda Morrison
      </Text>
      <View style={{ position: "absolute", top: 45, left: 20, zindex: 2 }}>
        {isScalling ? (
          <TouchableOpacity
            onPress={() => {
              setscalling();
              setterscalingwidth();
            }}
          >
            <Entypo name="chevron-thin-left" size={20} color="black" />
          </TouchableOpacity>
        ) : (
          <GoBack />
        )}
      </View>
      {!isScalling && (
        <Animated.View entering={SlideInUp}>
          <Box p={4} pt={4}>
            <HStack space={4} mt={4}>
              <MeteDataCard />
              <PatientInformationCard
                name={"Wanda	Morrison"}
                fileNumber={"DC545930"}
                age={34}
                diabetic={"NO"}
              />
            </HStack>
          </Box>
          <View
            style={{
              height: 30,
              width: responsiveWidth(100),
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <DropDownPage value={imageValue} setValue={setImageValue} />
            <View style={[styles.toolbarContainer, { flex: 1 }]}>
              <Toolbar
                undoCallBack={() => {
                  canvaRef?.current?.undo();
                }}
                redoCallback={() => {
                  canvaRef?.current?.redo();
                }}
                zoomCallback={() => {
                  canvaRef?.current?.isZoomToggle();
                  setIsDraw(false);
                }}
                drawCallback={() => {
                  canvaRef?.current?.isDrawToggle();
                  setIsDraw(true);
                }}
                saveCallback={()=>{
                  saveSvg(canvaRef?.current?.toSvg());
                }}
                isDraw={isDraw}
              />
            </View>
          </View>
        </Animated.View>
      )}

      <Box flex={1} style={{ flexDirection: "row", alignItems: "flex-start", }}>
        {/* chaneg the image,sketch,topchild,canva always in (540px,540*1.3) */}
        <Animated.View
          style={[
            { flex: 1, marginHorizontal: 20, marginTop: 20, borderRadius: 5},
            isRightSliderBar &&{marginLeft:SIZE.width/2-572/2},
            isScalling && {
              transform: [
                { scale: 1.3 },
                { translateY: 574 * 0.18 },
                { translateX: 574 * 0.18 },
              ],
            },
          ]}
        >
          <ZoomableNormal
            ChildCon={<Childcon canvaRef={canvaRef} />}
            iszoomable={!isDraw}
            widthPersentage={75}
          />
        </Animated.View>
        {!isScalling && (
          <Animated.View entering={SlideInRight} style={{overflow:"visible"}}>
            <SideBarRight onPress={thumListShow} setShowLeftSideBard={setIsRightSliderBar} showLeftSideBard={isRightSliderBar}/>
          </Animated.View>
        )}
        {!isScalling && (
          <Animated.View
            entering={SlideInLeft.duration(500)}
            style={{ position: "absolute", top: -50}}
          >
            <SideBar/>
          </Animated.View>
        )}
      </Box>
      <Animated.View
        layout={Layout.duration(300)}
        style={[
          { flexDirection: "row", marginBottom: 10,padding:10,paddingHorizontal:5,borderRadius:5,backgroundColor:"white",marginHorizontal:20,height: 0 },
          (isShowThumbList && !isScalling && !isRightSliderBar)? { height: 100 } : { backgroundColor:"transparent" },
        ]}
      >
        <Box justifyContent={"center"} backgroundColor={"#BFDCEB"} rounded="sm">
          <TouchableOpacity
            style={{
              flex: 1,
              width: 40,
              padding: 10,
              justifyContent: "center",
            }}
            onPress={() => {
              // PriviousIndex();
            }}
          >
            <Ionicons name={"ios-chevron-back"} size={20} color={"#0073AE"} />
          </TouchableOpacity>
        </Box>
        {/* THUMB FLATLIST */}
        <FlatList
          horizontal
          // bounces
          // ref={thumbRef}
          showsHorizontalScrollIndicator={false}
          style={{ flex: 1, marginHorizontal: 20 }}
          data={savedFlatlistdata}
          renderItem={({ item, index }) => {
            return (
              <Box
              shadow={4}
                key={index}
                rounded="sm"
                style={{
                  marginRight: thumbSpacing,
                  borderWidth: 1,
                  borderColor: active == index ? "#0073AE" : "transparent",
                }}
              >
                <TouchableOpacity
                  // onPress={() => toplistScrolltoIndex(index)}
                  onPress={() => {setActive(index);setIsROModel(true);setROChildImage(index);}}
                  style={{ flex: 1 }}
                >
                  <Image
                    source={dumyData.imagevaluearr[item?.imagevalue]}
                    style={{
                      width: thumbImageSize,
                      height: thumbImageSize,
                      flex: 1,
                      borderRadius: 5,
                    }}
                  />
                </TouchableOpacity>
              </Box>
            );
          }}
        ></FlatList>
        <Box justifyContent={"center"} backgroundColor={"#BFDCEB"} rounded="sm">
          <TouchableOpacity
            style={{
              flex: 1,
              width: 40,
              padding: 10,
              justifyContent: "center",
            }}
            onPress={() => {
              // nextIndex();
            }}
          >
            <Ionicons
              name={"ios-chevron-forward"}
              size={20}
              color={"#0073AE"}
            />
          </TouchableOpacity>
        </Box>
      </Animated.View>
      {isScalling && (
        <Animated.View
          entering={SlideInDown}
          exiting={SlideOutDown.duration(500)}
          style={[styles.toolbarContainerbottom]}
        >
          <Toolbar
            undoCallBack={() => {
              canvaRef?.current?.undo();
            }}
            redoCallback={() => {
              canvaRef?.current?.redo();
            }}
            zoomCallback={() => {
              canvaRef?.current?.isZoomToggle();
              setIsDraw(false);
            }}
            drawCallback={() => {
              canvaRef?.current?.isDrawToggle();
              setIsDraw(true);
            }}
            isDraw={isDraw}
          />
        </Animated.View>
      )}
      {isROModel && <View  style={[{width:SIZE.width,height:SIZE.height,backgroundColor:"rgba(0,0,0,.5)",alignItems:"center",justifyContent:"center"},StyleSheet.absoluteFill]}>
            <Animated.View entering={SlideInDown} exiting={FadeOut.delay(200)} style={{width:SIZE.width-100,height:SIZE.height-100,backgroundColor:"whitesmoke",borderRadius:20,alignItems:"center",justifyContent:"center"}}>
              <Text style={{fontSize:20,color:"#2b2b2b",marginBottom:50}}>
                Title of the Content
              </Text>
              <ChildconModel/>
            </Animated.View>
            <TouchableOpacity onPress={()=>{setIsROModel(false)}} style={{alignItems:"center",justifyContent:"center",position:"absolute",top:80,right:80}}>
            <Feather name="x" size={24} color="grey" />
            </TouchableOpacity>
      </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(229, 241, 247, 0.5)",
  },
  btnStyle: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#0073AE",
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
    borderRadius: 5,
  },
  outbtnStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "transparent",
    borderColor: "#0073AE",
    borderWidth: 2,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
    borderRadius: 5,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 50,
  },

  btnText: {
    color: "white",
  },
  chatConatiner: {
    // backgroundColor: "red",
    width: "10%",
    height: "10%",
    position: "absolute",
    left: 0,
    bottom: 0,
    borderRadius: 20,
    borderBottomRightRadius: 0,
    zindex: 1,
  },
  sketchContainer: {
    flex: 1,
  },
  toolbarContainer: {
    alignItems: "flex-end",
    marginHorizontal: 20,
    height: 50,
    justifyContent: "center",
  },
  toolbar: {
    height: 50,
    justifyContent: "center",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#00BCE4",
    flexDirection: "row",
    alignItems: "center",
  },
  toolBarBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRightColor: "lightblue",
    borderRightWidth: 1,
    marginHorizontal: 5,
    paddingRight: 15,
  },
  cancleBtn: {
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.9,
    marginLeft: 5,
  },
  toolbarContainerbottom: {
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor:"red",
  },
});

export default MainProfile;
