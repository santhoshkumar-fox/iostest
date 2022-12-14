import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, Heading, Text, HStack, VStack } from "native-base";
import { RFPercentage } from "react-native-responsive-fontsize";
const PatientInformationCard = ({ name, fileNumber, age, dob }) => {
  return (
    <Box flex={1.32} p={4} rounded={"md"} bg="white" shadow={3}>
      <Heading size={"xs"} mb={2} style={{fontSize:RFPercentage(1)}}>
        Patient Label
      </Heading>
      <HStack space={4}>
        <VStack space={.5} style={{marginVertical:5}}>
          <HStack space={1}>
            <Text style={{fontSize:RFPercentage(1)}} color={"gray.500"}>
              Name :
            </Text>
            <Text style={{fontSize:RFPercentage(1)}}>{name}</Text>
          </HStack>
          <HStack space={1} style={{marginVertical:4}}>
            <Text style={{fontSize:RFPercentage(1)}} color={"gray.500"}>
              Age :
            </Text>
            <Text style={{fontSize:RFPercentage(1)}}>{"21"}</Text>
          </HStack>
          <HStack space={1}>
            <Text style={{fontSize:RFPercentage(1)}} color={"gray.500"}>
              FileNumber :
            </Text>
            <Text style={{fontSize:RFPercentage(1)}}>{fileNumber}</Text>
          </HStack>
        </VStack>
        <VStack space={.5} style={{marginVertical:5}}>
          <HStack space={1}>
            <Text style={{fontSize:RFPercentage(1)}} color={"gray.500"}>
              Gender :
            </Text>
            <Text style={{fontSize:RFPercentage(1)}}>{"F"}</Text>
          </HStack>
          <HStack space={1} style={{marginVertical:4}}>
            <Text style={{fontSize:RFPercentage(1)}} color={"gray.500"}>
              DOB :
            </Text>
            <Text style={{fontSize:RFPercentage(1)}}>{dob}</Text>
          </HStack>
          <HStack space={1}>
            <Text style={{fontSize:RFPercentage(1)}} color={"gray.500"}>
              Patient Id :
            </Text>
            <Text style={{fontSize:RFPercentage(1)}}>{12345}</Text>
          </HStack>
        </VStack>
        
      </HStack>
    </Box>
  );
};

export default PatientInformationCard;

const styles = StyleSheet.create({});
