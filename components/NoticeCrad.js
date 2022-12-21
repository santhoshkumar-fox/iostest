import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Box, ScrollView} from "native-base"
import { COLORS } from '../constants/theme';
const NoticeCrad = () => {
  return (
    <Box shadow={2} style={styles.agendaCantainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Card title={"Average Wait times for consultation(Min)"} count={"30"}/>   
      <Card title={"Average Wait times for testing(Min)"} count={"15"}/>   
      <Card title={"Average Age Group"} count={"30"}/>    
      <Card title={"Total Patients with Diabetes"} count={"10"}/>   
      <Card title={"Total Patients with Occupation Hazard "} count={"05"}/>   
      <Card title={"Most consultation types"} count={"05"}/>   
      </ScrollView>  
    </Box>
  )
}

const Card = ({title,count})=>{
    return(
        <View style={styles.cardContainer}>
            <Text style={styles.cardCount}>{count}</Text>
            <Text style={styles.cardTitle}>{title}</Text>
        </View>
    )
}

export default NoticeCrad

const styles = StyleSheet.create({
    agendaCantainer: {
        height:130,
        marginVertical: 10,
        backgroundColor:"white",
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,  
        flexDirection:"row",
      },
      cardContainer:{
        width:200,
        height:100,
        alignItems:'center',
        justifyContent:'center'
      },
      cardTitle:{
        width:170,
        height:40,
        textAlign:"center",
        color:"black",
        fontSize:12,
        fontWeight:"500"
      },
      cardCount:{
        textAlign:'center',
        color:COLORS.secondaryColor,
        fontSize:30,
        fontWeight:'600',
        marginVertical:5,
      }
})