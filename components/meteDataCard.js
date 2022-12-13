import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, Text, Heading, HStack, VStack } from "native-base";
const MeteDataCard = () => {
  return (
    <Box flex={2} p={4} rounded={"md"} bg="white" shadow={2}>
      <Heading size={"xs"} mb={2}>
      Patient Key Information
      </Heading>
      <HStack mt={2} space={4}>
        <VStack space={1}>
          <HStack space={2}>
            <Text fontSize={"xs"} color={"gray.500"}>
            Allergies :
            </Text>
            <Text fontSize={"xs"}>null</Text>
          </HStack>
          <HStack space={2}>
            <Text fontSize={"xs"} color={"gray.500"}>
            Diabetic  :
            </Text>
            <Text fontSize={"xs"}>No</Text>
          </HStack>
          <HStack space={2}>
            <Text fontSize={"xs"} color={"gray.500"}>
            Veteran :
            </Text>
            <Text fontSize={"xs"}>No</Text>
          </HStack>
        </VStack>

        <VStack space={1} style={{marginHorizontal:20}}>
        <HStack space={2}>
            <Text fontSize={"xs"} color={"gray.500"}>
            Pensioner :
            </Text>
            <Text fontSize={"xs"}>Yes</Text>
          </HStack>
          <HStack space={2}>
            <Text fontSize={"xs"} color={"gray.500"}>
            Referral Doctor :
            </Text>
            <Text fontSize={"xs"}>Jhon Deo</Text>
          </HStack>
          <HStack space={2}>
            <Text fontSize={"xs"} color={"gray.500"}>
            Insulin dependent :
            </Text>
            <Text fontSize={"xs"}>No</Text>
          </HStack>
        </VStack>
        <VStack space={1}>
          <HStack space={2}>
            <Text fontSize={"xs"} color={"gray.500"}>
            Smoker :
            </Text>
            <Text fontSize={"xs"}>No</Text>
          </HStack>
          <HStack space={2}>
            <Text fontSize={"xs"} color={"gray.500"}>
            Occupation : 


            </Text>
            <Text fontSize={"xs"}>Engineer</Text>
          </HStack>
          <HStack space={2}>
            <Text fontSize={"xs"} color={"gray.500"}>
            Claustrophobia : 
            </Text>
            <Text fontSize={"xs"}>Yes</Text>
          </HStack>
        </VStack>
        
      </HStack>
    </Box>
  );
};

export default MeteDataCard;

const styles = StyleSheet.create({});
