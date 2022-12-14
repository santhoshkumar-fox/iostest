import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'Patient Continuation Form', value: 4 },
    { label: 'Patient Form', value: 5 },
    { label: 'Clinical Doctor white page', value: 0 },
    { label: 'CASA Record Form', value: 1 },
    { label: 'Clinical Assessment page', value: 2 },
    { label: 'DFRPatient', value:3 },
   
  ];

const ClinicDropDown = () => {
  return (
    <View>
       <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        showsVerticalScrollIndicator={false}
        search
        maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder="Choose Clinic"
        searchPlaceholder="Search ..."
        // value={value}
        // onChange={item => {
        //   setValue(item.value);
        // }}
        // renderLeftIcon={() => (
        //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        // )}
        containerStyle={styles.containerStyle}
      />
    </View>
  )
}

export default ClinicDropDown
const styles = StyleSheet.create({
    dropdown: {
      height: 30,
      borderWidth:StyleSheet.hairlineWidth,
      borderColor:'grey',
      width:300,
      backgroundColor:"white",
      borderRadius:5,
      paddingHorizontal:10,
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 13,
      color:""
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    //   backgroundColor:'red',
      borderRadius:10,

    },containerStyle:{
        // backgroundColor:'red',
        borderRadius:20,
    }
  });