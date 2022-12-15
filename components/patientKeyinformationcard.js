import { StyleSheet, View,ScrollView} from "react-native";
import React from "react";
import { Box, Text, Heading, HStack, VStack } from "native-base";
import {SIZE} from "../constants"
import {RFPercentage} from "react-native-responsive-fontsize"
const PatientKeyInformation = () => {
  return (
    <Box flex={2} p={4} rounded={"md"} bg="white" shadow={2} >
     <ScrollView style={{flex:1 }}>
     <Heading size={"xs"} mb={2} style={{fontSize:SIZE.h4}}>
      Patient Key Information
      </Heading>
      <HStack mt={2} space={1} style={{fontSize:SIZE.h5}}>
        <VStack space={1}>
          <HStack space={1}>
            <Text style={{fontSize:SIZE.h5}} color={"gray.500"}>
            Allergies :
            </Text>
            <Text style={{fontSize:SIZE.h5}}>Values</Text>
          </HStack>
          <HStack space={1}>
            <Text style={{fontSize:SIZE.h5}} color={"gray.500"}>
            Diabetic  :
            </Text>
            <Text style={{fontSize:SIZE.h5}}>No</Text>
          </HStack>
          <HStack space={1}>
            <Text style={{fontSize:SIZE.h5}} color={"gray.500"}>
            Veteran :
            </Text>
            <Text style={{fontSize:SIZE.h5}}>No</Text>
          </HStack>
        </VStack>

        <VStack space={1} style={{marginHorizontal:20}}>
        <HStack space={1}>
            <Text style={{fontSize:SIZE.h5}} color={"gray.500"}>
            Pensioner :
            </Text>
            <Text style={{fontSize:SIZE.h5}}>Yes</Text>
          </HStack>
          <HStack space={1}>
            <Text style={{fontSize:SIZE.h5}} color={"gray.500"}>
            Referral Doctor :
            </Text>
            <Text style={{fontSize:SIZE.h5}}>Jhon Deo</Text>
          </HStack>
          <HStack space={1}>
            <Text style={{fontSize:SIZE.h5}} color={"gray.500"}>
            Insulin dependent :
            </Text>
            <Text style={{fontSize:SIZE.h5}}>No</Text>
          </HStack>
        </VStack>
        <VStack space={1}>
          <HStack space={1}>
            <Text style={{fontSize:SIZE.h5}} color={"gray.500"}>
            Smoker :
            </Text>
            <Text style={{fontSize:SIZE.h5}}>No</Text>
          </HStack>
          <HStack space={1}>
            <Text style={{fontSize:SIZE.h5}} color={"gray.500"}>
            Occupation : 


            </Text>
            <Text style={{fontSize:SIZE.h5}}>Engineer</Text>
          </HStack>
          <HStack space={1}>
            <Text style={{fontSize:SIZE.h5}} color={"gray.500"}>
            Claustrophobia : 
            </Text>
            <Text style={{fontSize:SIZE.h5}}>Yes</Text>
          </HStack>
        </VStack>
        
      </HStack>
     </ScrollView>
    </Box>
  );
};

export default PatientKeyInformation;

const styles = StyleSheet.create({});
