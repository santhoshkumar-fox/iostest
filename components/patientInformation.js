import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, Heading, Text, HStack, VStack } from "native-base";
const PatientInformationCard = ({ name, fileNumber, age, dob }) => {
  return (
    <Box flex={1.32} p={4} rounded={"md"} bg="white" shadow={3}>
      <Heading size={"xs"} mb={2}>
        Patient Label
      </Heading>
      <HStack space={4}>
        <VStack space={.5} style={{marginVertical:5}}>
          <HStack space={1}>
            <Text fontSize={"xs"} color={"gray.500"}>
              Name :
            </Text>
            <Text fontSize={"xs"}>{name}</Text>
          </HStack>
          <HStack space={1} style={{marginVertical:4}}>
            <Text fontSize={"xs"} color={"gray.500"}>
              Age :
            </Text>
            <Text fontSize={"xs"}>{"21"}</Text>
          </HStack>
          <HStack space={1}>
            <Text fontSize={"xs"} color={"gray.500"}>
              DOB :
            </Text>
            <Text fontSize={"xs"}>{dob}</Text>
          </HStack>
        </VStack>
        <VStack space={.5} style={{marginVertical:5}}>
          <HStack space={1}>
            <Text fontSize={"xs"} color={"gray.500"}>
              Gender :
            </Text>
            <Text fontSize={"xs"}>{"F"}</Text>
          </HStack>
          <HStack space={1} style={{marginVertical:4}}>
            <Text fontSize={"xs"} color={"gray.500"}>
              Filenumber :
            </Text>
            <Text fontSize={"xs"}>{fileNumber}</Text>
          </HStack>
          <HStack space={1}>
            <Text fontSize={"xs"} color={"gray.500"}>
              Patient Id :
            </Text>
            <Text fontSize={"xs"}>{12345}</Text>
          </HStack>
        </VStack>
        
      </HStack>
    </Box>
  );
};

export default PatientInformationCard;

const styles = StyleSheet.create({});
